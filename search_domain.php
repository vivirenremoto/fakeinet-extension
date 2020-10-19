<?php

require __DIR__ . '/wp-blog-header.php';

$data = array();

$domain = $_GET['domain'];

$id = $wpdb->get_var($wpdb->prepare(
    "SELECT
        ID
    FROM
        {$wpdb->base_prefix}posts
    WHERE
        post_status = 'publish' AND
        post_title LIKE %s
    ORDER BY ID DESC
    LIMIT 1;",
    '%' . $wpdb->esc_like($domain) . '%'
));

if ($id) {
    $data['found'] = true;
    $data['url'] = get_permalink($id);
} else {
    $data['found'] = false;
}

header("Content-type: application/json");

echo json_encode($data);
