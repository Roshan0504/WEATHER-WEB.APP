<!DOCTYPE html>
<!-- saved from url=(0079)https://github.com/sayansarkar2001/weather_app/blob/main/src/currentLocation.js -->
<html lang="en" data-color-mode="auto" data-light-theme="light" data-dark-theme="dark" data-a11y-animated-images="system" data-a11y-link-underlines="true" class="js-focus-visible" data-js-focus-visible="" data-turbo-loaded=""><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"><style type="text/css">.turbo-progress-bar {
  position: fixed;
  display: block;
  top: 0;
  left: 0;
  height: 3px;
  background: #0076ff;
  z-index: 2147483647;
  transition:
    width 300ms ease-out,
    opacity 150ms 150ms ease-in;
  transform: translate3d(0, 0, 0);
}
</style>
    
  <link rel="dns-prefetch" href="https://github.githubassets.com/">
  <link rel="dns-prefetch" href="https://avatars.githubusercontent.com/">
  <link rel="dns-prefetch" href="https://github-cloud.s3.amazonaws.com/">
  <link rel="dns-prefetch" href="https://user-images.githubusercontent.com/">
  <link rel="preconnect" href="https://github.githubassets.com/" crossorigin="">
  <link rel="preconnect" href="https://avatars.githubusercontent.com/">

  


  <link crossorigin="anonymous" media="all" rel="stylesheet" href="./apiKeys_files/light-efd2f2257c96.css"><link crossorigin="anonymous" media="all" rel="stylesheet" href="./apiKeys_files/dark-6b1e37da2254.css"><link data-color-theme="dark_dimmed" crossorigin="anonymous" media="all" rel="stylesheet" data-href="https://github.githubassets.com/assets/dark_dimmed-aa16bfa90fb8.css"><link data-color-theme="dark_high_contrast" crossorigin="anonymous" media="all" rel="stylesheet" data-href="https://github.githubassets.com/assets/dark_high_contrast-f4daad25d8cf.css"><link data-color-theme="dark_colorblind" crossorigin="anonymous" media="all" rel="stylesheet" data-href="https://github.githubassets.com/assets/dark_colorblind-a4629b2e906b.css"><link data-color-theme="light_colorblind" crossorigin="anonymous" media="all" rel="stylesheet" data-href="https://github.githubassets.com/assets/light_colorblind-afcc3a6a38dd.css"><link data-color-theme="light_high_contrast" crossorigin="anonymous" media="all" rel="stylesheet" data-href="https://github.githubassets.com/assets/light_high_contrast-79bca7145393.css"><link data-color-theme="light_tritanopia" crossorigin="anonymous" media="all" rel="stylesheet" data-href="https://github.githubassets.com/assets/light_tritanopia-fe4137b54b26.css"><link data-color-theme="dark_tritanopia" crossorigin="anonymous" media="all" rel="stylesheet" data-href="https://github.githubassets.com/assets/dark_tritanopia-1911f0cf0db4.css">
    <link crossorigin="anonymous" media="all" rel="stylesheet" href="./apiKeys_files/primer-primitives-8500c2c7ce5f.css">
    <link crossorigin="anonymous" media="all" rel="stylesheet" href="./apiKeys_files/primer-fbdbeff9329d.css">
    <link crossorigin="anonymous" media="all" rel="stylesheet" href="./apiKeys_files/global-0c67cda2fd21.css">
    <link crossorigin="anonymous" media="all" rel="stylesheet" href="./apiKeys_files/github-b29112a67f62.css">
  <link crossorigin="anonymous" media="all" rel="stylesheet" href="./apiKeys_files/repository-a7f555d78ff9.css">
<link crossorigin="anonymous" media="all" rel="stylesheet" href="./apiKeys_files/code-5137b44b5cd6.css">

  


  <script type="application/json" id="client-env">{"locale":"en","featureFlags":["code_vulnerability_scanning","copilot_beta_features_opt_in","copilot_chat_static_thread_suggestions","copilot_conversational_ux_history_refs","copilot_followup_to_agent","copilot_implicit_context","copilot_smell_icebreaker_ux","custom_inp","failbot_handle_non_errors","geojson_azure_maps","issues_react_is_read","kb_source_repos","marketing_pages_search_explore_provider","react_start_transition_for_navigations","remove_child_patch","sample_network_conn_type","turbo_experiment_risky"]}</script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./apiKeys_files/wp-runtime-3ff69af7a3c1.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./apiKeys_files/vendors-node_modules_dompurify_dist_purify_js-810e4b1b9abd.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./apiKeys_files/vendors-node_modules_oddbird_popover-polyfill_dist_popover_js-4ac41d0a76fd.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./apiKeys_files/vendors-node_modules_github_mini-throttle_dist_index_js-node_modules_smoothscroll-polyfill_di-75db2e-e091a6d939e9.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./apiKeys_files/environment-041d6b79df7b.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./apiKeys_files/vendors-node_modules_primer_behaviors_dist_esm_focus-zone_js-03bcda509ec9.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./apiKeys_files/vendors-node_modules_github_selector-observer_dist_index_esm_js-9f960d9b217c.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./apiKeys_files/vendors-node_modules_github_text-expander-element_dist_index_js-19ce25503c82.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./apiKeys_files/vendors-node_modules_github_auto-complete-element_dist_index_js-node_modules_github_details-d-ed9a97-dfdebffa4a55.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./apiKeys_files/vendors-node_modules_github_mini-throttle_dist_index_js-node_modules_delegated-events_dist_in-af795d-767d6f041dd5.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./apiKeys_files/vendors-node_modules_github_filter-input-element_dist_index_js-node_modules_github_remote-inp-b7d8f4-6e6f83bcc978.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./apiKeys_files/vendors-node_modules_github_catalyst_lib_index_js-node_modules_github_clipboard-copy-element_-782ca5-14181f295dc0.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./apiKeys_files/vendors-node_modules_github_file-attachment-element_dist_index_js-node_modules_primer_view-co-15cdfa-fdfdefb25b02.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./apiKeys_files/app_assets_modules_github_onfocus_ts-ui_packages_trusted-types-policies_policy_ts-ui_packages-6fe316-88898a485083.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./apiKeys_files/github-elements-5aacc48643e9.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./apiKeys_files/element-registry-2ce29c8f1690.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./apiKeys_files/vendors-node_modules_github_catalyst_lib_index_js-node_modules_github_hydro-analytics-client_-7901e7-f8af173502c4.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./apiKeys_files/vendors-node_modules_braintree_browser-detection_dist_browser-detection_js-node_modules_stack-68835d-59206c834a41.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./apiKeys_files/vendors-node_modules_lit-html_lit-html_js-cc7cb714ead5.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./apiKeys_files/vendors-node_modules_github_mini-throttle_dist_index_js-node_modules_morphdom_dist_morphdom-e-7c534c-38ef9cb819da.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./apiKeys_files/vendors-node_modules_github_turbo_dist_turbo_es2017-esm_js-1cea0f5eff45.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./apiKeys_files/vendors-node_modules_github_remote-form_dist_index_js-node_modules_delegated-events_dist_inde-893f9f-880ac2bbb719.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./apiKeys_files/vendors-node_modules_scroll-anchoring_dist_scroll-anchoring_esm_js-node_modules_github_hotkey-1a1d91-56e858031112.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./apiKeys_files/vendors-node_modules_color-convert_index_js-cdd1e82b3795.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./apiKeys_files/vendors-node_modules_primer_behaviors_dist_esm_dimensions_js-node_modules_github_jtml_lib_index_js-b1947a1d4855.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./apiKeys_files/vendors-node_modules_github_session-resume_dist_index_js-node_modules_primer_behaviors_dist_e-da6ec6-77ce2f267f4e.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./apiKeys_files/vendors-node_modules_github_quote-selection_dist_index_js-node_modules_github_textarea-autosi-9e0349-7c78ee755ad3.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./apiKeys_files/ui_packages_updatable-content_updatable-content_ts-f09f1b986476.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./apiKeys_files/app_assets_modules_github_behaviors_task-list_ts-app_assets_modules_github_onfocus_ts-app_ass-421cec-4b1b14b7b7e3.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./apiKeys_files/app_assets_modules_github_sticky-scroll-into-view_ts-6eeea28aaa24.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./apiKeys_files/app_assets_modules_github_behaviors_ajax-error_ts-app_assets_modules_github_behaviors_include-467754-558672090412.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./apiKeys_files/app_assets_modules_github_behaviors_commenting_edit_ts-app_assets_modules_github_behaviors_ht-83c235-7b4e1bb6ed01.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./apiKeys_files/app_assets_modules_github_blob-anchor_ts-app_assets_modules_github_filter-sort_ts-app_assets_-6deafe-ba6b1a674c75.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./apiKeys_files/behaviors-4684bdf7d153.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./apiKeys_files/vendors-node_modules_delegated-events_dist_index_js-node_modules_github_catalyst_lib_index_js-06ff531-2ea61fcc9a71.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./apiKeys_files/notifications-global-c65a9d55f5bb.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./apiKeys_files/vendors-node_modules_github_mini-throttle_dist_index_js-node_modules_github_catalyst_lib_inde-dbbea9-bac2d7b04358.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./apiKeys_files/app_assets_modules_github_repositories_get-repo-element_ts-44579c43c8c5.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./apiKeys_files/code-menu-6c10c0b19d08.js.download"></script>
  
  <script crossorigin="anonymous" defer="defer" type="application/javascript" src="./apiKeys_files/react-lib-a89cbd87a1e0.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./apiKeys_files/vendors-node_modules_github_mini-throttle_dist_index_js-node_modules_primer_octicons-react_di-b40d97-9b98c5140e22.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./apiKeys_files/vendors-node_modules_primer_react_lib-esm_Box_Box_js-5a335cbe71ad.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./apiKeys_files/vendors-node_modules_primer_react_lib-esm_Button_Button_js-e0418ad2e1ae.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./apiKeys_files/vendors-node_modules_primer_react_lib-esm_TooltipV2_Tooltip_js-6278fe36ada6.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./apiKeys_files/vendors-node_modules_clsx_dist_clsx_m_js-node_modules_primer_react_node_modules_primer_octico-c56103-8d7e43c39cbf.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./apiKeys_files/vendors-node_modules_primer_react_lib-esm_ActionList_index_js-21d92d59cd2c.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./apiKeys_files/vendors-node_modules_primer_react_lib-esm_Text_Text_js-node_modules_primer_react_lib-esm_Text-7845da-3df63b81aba2.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./apiKeys_files/vendors-node_modules_primer_react_lib-esm_ActionMenu_ActionMenu_js-node_modules_primer_react_-5b2420-a2ece361a5e9.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./apiKeys_files/vendors-node_modules_primer_react_lib-esm_FormControl_FormControl_js-4a3e8f643859.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./apiKeys_files/vendors-node_modules_react-router-dom_dist_index_js-b2efb8a73d21.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./apiKeys_files/vendors-node_modules_primer_react_lib-esm_ConfirmationDialog_ConfirmationDialog_js-b8bc3df5a244.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./apiKeys_files/vendors-node_modules_primer_react_lib-esm_Link_Link_js-node_modules_primer_react_lib-esm_Rela-a903d7-61c8d74beec2.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./apiKeys_files/vendors-node_modules_primer_react_lib-esm_Heading_Heading_js-node_modules_primer_react_lib-es-344976-beba6ae9d178.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./apiKeys_files/vendors-node_modules_primer_react_lib-esm_TreeView_TreeView_js-f90c9ef93f03.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./apiKeys_files/vendors-node_modules_primer_react_lib-esm_BranchName_BranchName_js-node_modules_primer_react_-289d03-cd7cc0bfb299.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./apiKeys_files/vendors-node_modules_primer_react_lib-esm_Avatar_Avatar_js-node_modules_primer_react_lib-esm_-125f7b-c5194e9f8d9f.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./apiKeys_files/vendors-node_modules_primer_react_lib-esm_CheckboxGroup_CheckboxGroup_js-node_modules_primer_-5b5d36-a847f91e2193.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./apiKeys_files/ui_packages_react-core_create-browser-history_ts-ui_packages_safe-storage_safe-storage_ts-ui_-682c2c-be6bcd0afcc8.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./apiKeys_files/ui_packages_react-core_register-app_ts-76c403c603b1.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./apiKeys_files/ui_packages_paths_index_ts-270b839269cb.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./apiKeys_files/ui_packages_ref-selector_RefSelector_tsx-94540a7bf359.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./apiKeys_files/ui_packages_commit-attribution_index_ts-ui_packages_commit-checks-status_index_ts-ui_packages-f45efb-c654777d0d1c.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./apiKeys_files/ui_packages_code-view-shared_hooks_use-canonical-object_ts-ui_packages_code-view-shared_hooks-6c8816-0e3f85d98e5c.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./apiKeys_files/ui_packages_code-view-shared_hooks_use-file-page-payload_ts-ui_packages_code-view-shared_util-337bac-643cb002ed07.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./apiKeys_files/ui_packages_repos-file-tree-view_repos-file-tree-view_ts-ui_packages_react-core_JsonRoute_tsx-748bc93fe564.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./apiKeys_files/react-code-view-906899fd716b.js.download"></script>
<link crossorigin="anonymous" media="all" rel="stylesheet" href="./apiKeys_files/react-code-view.234ae39ff1fa1232236c.module.css">

    <script crossorigin="anonymous" defer="defer" type="application/javascript" src="./apiKeys_files/react-lib-a89cbd87a1e0.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./apiKeys_files/vendors-node_modules_github_mini-throttle_dist_index_js-node_modules_primer_octicons-react_di-b40d97-9b98c5140e22.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./apiKeys_files/vendors-node_modules_primer_react_lib-esm_Box_Box_js-5a335cbe71ad.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./apiKeys_files/vendors-node_modules_primer_react_lib-esm_Button_Button_js-e0418ad2e1ae.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./apiKeys_files/vendors-node_modules_primer_react_lib-esm_TooltipV2_Tooltip_js-6278fe36ada6.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./apiKeys_files/vendors-node_modules_clsx_dist_clsx_m_js-node_modules_primer_react_node_modules_primer_octico-c56103-8d7e43c39cbf.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./apiKeys_files/vendors-node_modules_primer_react_lib-esm_ActionList_index_js-21d92d59cd2c.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./apiKeys_files/vendors-node_modules_primer_react_lib-esm_Text_Text_js-node_modules_primer_react_lib-esm_Text-7845da-3df63b81aba2.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./apiKeys_files/vendors-node_modules_primer_react_lib-esm_ActionMenu_ActionMenu_js-node_modules_primer_react_-5b2420-a2ece361a5e9.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./apiKeys_files/vendors-node_modules_primer_react_lib-esm_FormControl_FormControl_js-4a3e8f643859.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./apiKeys_files/vendors-node_modules_primer_react_lib-esm_SelectPanel_SelectPanel_js-ef7cc594b287.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./apiKeys_files/ui_packages_react-core_create-browser-history_ts-ui_packages_safe-storage_safe-storage_ts-ui_-682c2c-be6bcd0afcc8.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./apiKeys_files/notifications-subscriptions-menu-ded20b1c4afc.js.download"></script>
<link crossorigin="anonymous" media="all" rel="stylesheet" href="./apiKeys_files/notifications-subscriptions-menu.572fff1cb5c3caef1ac9.module.css">


  <title>weather_app/src/currentLocation.js at main · sayansarkar2001/weather_app · GitHub</title>



  <meta name="route-pattern" content="/:user_id/:repository/blob/*name(/*path)" data-turbo-transient="">
  <meta name="route-controller" content="blob" data-turbo-transient="">
  <meta name="route-action" content="show" data-turbo-transient="">

    
  <meta name="current-catalog-service-hash" content="f3abb0cc802f3d7b95fc8762b94bdcb13bf39634c40c357301c4aa1d67a256fb">


  <meta name="request-id" content="C553:368226:6C13C3:748070:669970E2" data-pjax-transient="true"><meta name="html-safe-nonce" content="19ff0cbf1e59dae86d5df78f9edb3496a733ce5764b876ad926c9a97b8ca870e" data-pjax-transient="true"><meta name="visitor-payload" content="eyJyZWZlcnJlciI6IiIsInJlcXVlc3RfaWQiOiJDNTUzOjM2ODIyNjo2QzEzQzM6NzQ4MDcwOjY2OTk3MEUyIiwidmlzaXRvcl9pZCI6IjM4MTQyMzEwNjcwODQ5MTY4MTMiLCJyZWdpb25fZWRnZSI6ImNlbnRyYWxpbmRpYSIsInJlZ2lvbl9yZW5kZXIiOiJjZW50cmFsaW5kaWEifQ==" data-pjax-transient="true"><meta name="visitor-hmac" content="647b9e2134284fe2e7d52d37355279dd04ec94b5d75057ec41f8970bfbfa7d51" data-pjax-transient="true">


    <meta name="hovercard-subject-tag" content="repository:748052548" data-turbo-transient="">


  <meta name="github-keyboard-shortcuts" content="repository,source-code,file-tree,copilot" data-turbo-transient="true">
  

  <meta name="selected-link" value="repo_source" data-turbo-transient="">
  <link rel="assets" href="https://github.githubassets.com/">

    <meta name="google-site-verification" content="Apib7-x98H0j5cPqHWwSMm6dNU4GmODRoqxLiDzdx9I">

<meta name="octolytics-url" content="https://collector.github.com/github/collect">

  <meta name="analytics-location" content="/&lt;user-name&gt;/&lt;repo-name&gt;/blob/show" data-turbo-transient="true">

  




    <meta name="user-login" content="">

  

    <meta name="viewport" content="width=device-width">

    

      <meta name="description" content="Contribute to sayansarkar2001/weather_app development by creating an account on GitHub.">

      <link rel="search" type="application/opensearchdescription+xml" href="https://github.com/opensearch.xml" title="GitHub">

    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
    <meta property="fb:app_id" content="1401488693436528">
    <meta name="apple-itunes-app" content="app-id=1477376905, app-argument=https://github.com/sayansarkar2001/weather_app/blob/main/src/App.test.js">

      <meta name="twitter:image:src" content="https://opengraph.githubassets.com/995ca16444bf26cfba10ca0d7660dbbe43cc28d8e2362b2cb523642d0840cffc/sayansarkar2001/weather_app"><meta name="twitter:site" content="@github"><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="weather_app/src/App.test.js at main · sayansarkar2001/weather_app"><meta name="twitter:description" content="Contribute to sayansarkar2001/weather_app development by creating an account on GitHub.">
  <meta property="og:image" content="https://opengraph.githubassets.com/995ca16444bf26cfba10ca0d7660dbbe43cc28d8e2362b2cb523642d0840cffc/sayansarkar2001/weather_app"><meta property="og:image:alt" content="Contribute to sayansarkar2001/weather_app development by creating an account on GitHub."><meta property="og:image:width" content="1200"><meta property="og:image:height" content="600"><meta property="og:site_name" content="GitHub"><meta property="og:type" content="object"><meta property="og:title" content="weather_app/src/App.test.js at main · sayansarkar2001/weather_app"><meta property="og:url" content="https://github.com/sayansarkar2001/weather_app/blob/main/src/App.test.js"><meta property="og:description" content="Contribute to sayansarkar2001/weather_app development by creating an account on GitHub.">
  




      <meta name="hostname" content="github.com">



        <meta name="expected-hostname" content="github.com">


  <meta http-equiv="x-pjax-version" content="031ab46a4fc03e268707a84c88d6b30e41056156a1df3e38e2bbd66e219aeabd" data-turbo-track="reload">
  <meta http-equiv="x-pjax-csp-version" content="f6e41c3092c5e1167d95330a2a482f695598c31ad79963c59b07ab79dbfb87f7" data-turbo-track="reload">
  <meta http-equiv="x-pjax-css-version" content="89e7a01e13754499f21bb5cbe9056926a20668ce4cf475d22aec98e2ef674a42" data-turbo-track="reload">
  <meta http-equiv="x-pjax-js-version" content="fbfe853c3074572d120b92c29205e49bb2eb53676eee31b32773deaa1a4329b0" data-turbo-track="reload">

  <meta name="turbo-cache-control" content="no-preview" data-turbo-transient="">

      <meta name="turbo-cache-control" content="no-cache" data-turbo-transient="">
    <meta data-hydrostats="publish">
  <meta name="go-import" content="github.com/sayansarkar2001/weather_app git https://github.com/sayansarkar2001/weather_app.git">

  <meta name="octolytics-dimension-user_id" content="95311933"><meta name="octolytics-dimension-user_login" content="sayansarkar2001"><meta name="octolytics-dimension-repository_id" content="748052548"><meta name="octolytics-dimension-repository_nwo" content="sayansarkar2001/weather_app"><meta name="octolytics-dimension-repository_public" content="true"><meta name="octolytics-dimension-repository_is_fork" content="false"><meta name="octolytics-dimension-repository_network_root_id" content="748052548"><meta name="octolytics-dimension-repository_network_root_nwo" content="sayansarkar2001/weather_app">



    

    <meta name="turbo-body-classes" content="logged-out env-production page-responsive">


  <meta name="browser-stats-url" content="https://api.github.com/_private/browser/stats">

  <meta name="browser-errors-url" content="https://api.github.com/_private/browser/errors">

  <link rel="mask-icon" href="https://github.githubassets.com/assets/pinned-octocat-093da3e6fa40.svg" color="#000000">
  <link rel="alternate icon" class="js-site-favicon" type="image/png" href="https://github.githubassets.com/favicons/favicon.png">
  <link rel="icon" class="js-site-favicon" type="image/svg+xml" href="https://github.githubassets.com/favicons/favicon.svg">

<meta name="theme-color" content="#1e2327">
<meta name="color-scheme" content="light dark">

  <meta name="msapplication-TileImage" content="/windows-tile.png">
  <meta name="msapplication-TileColor" content="#ffffff">

  <link rel="manifest" href="https://github.com/manifest.json" crossorigin="use-credentials">

  <style data-styled="active" data-styled-version="5.3.6"></style><style id="ms-consent-banner-main-styles">.w8hcgFksdo30C8w-bygqu{color:#000}.ydkKdaztSS0AeHWIeIHsQ a{color:#0067B8}.erL690_8JwUW-R4bJRcfl{background-color:#EBEBEB;border:none;color:#000}.erL690_8JwUW-R4bJRcfl:enabled:hover{color:#000;background-color:#DBDBDB;box-shadow:0px 4px 10px rgba(0,0,0,0.25);border:none}.erL690_8JwUW-R4bJRcfl:enabled:focus{background-color:#DBDBDB;box-shadow:0px 4px 10px rgba(0,0,0,0.25);border:2px solid #000}.erL690_8JwUW-R4bJRcfl:disabled{opacity:1;color:rgba(0,0,0,0.2);background-color:rgba(0,0,0,0.2);border:none}._1zNQOqxpBFSokeCLGi_hGr{border:none;background-color:#0067B8;color:#fff}._1zNQOqxpBFSokeCLGi_hGr:enabled:hover{color:#fff;background-color:#0067B8;box-shadow:0px 4px 10px rgba(0,0,0,0.25);border:none}._1zNQOqxpBFSokeCLGi_hGr:enabled:focus{background-color:#0067B8;box-shadow:0px 4px 10px rgba(0,0,0,0.25);border:2px solid #000}._1zNQOqxpBFSokeCLGi_hGr:disabled{opacity:1;color:rgba(0,0,0,0.2);background-color:rgba(0,120,215,0.2);border:none}._23tra1HsiiP6cT-Cka-ycB{position:relative;display:flex;z-index:9999;width:100%;background-color:#F2F2F2;justify-content:space-between;text-align:left}div[dir="rtl"]._23tra1HsiiP6cT-Cka-ycB{text-align:right}._1Upc2NjY8AlDn177YoVj0y{margin:0;padding-left:5%;padding-top:8px;padding-bottom:8px}div[dir="rtl"] ._1Upc2NjY8AlDn177YoVj0y{margin:0;padding:8px 5% 8px 0;float:none}._23tra1HsiiP6cT-Cka-ycB svg{fill:none;max-width:none;max-height:none}._1V_hlU-7jdtPiooHMu89BB{display:table-cell;padding:12px;width:24px;height:24px;font-family:Segoe UI, SegoeUI, Arial, sans-serif;font-style:normal;font-weight:normal;font-size:24px;line-height:0}.f6QKJD7fhSbnJLarTL-W-{display:table-cell;vertical-align:middle;padding:0;font-family:Segoe UI, SegoeUI, Arial, sans-serif;font-style:normal;font-weight:normal;font-size:13px;line-height:16px}.f6QKJD7fhSbnJLarTL-W- a{text-decoration:underline}._2j0fmugLb1FgYz6KPuB91w{display:inline-block;margin-left:5%;margin-right:5%;min-width:40%;min-width:calc((150px + 3 * 4px) * 2 + 150px);min-width:-webkit-fit-content;min-width:-moz-fit-content;min-width:fit-content;align-self:center;position:relative}._1XuCi2WhiqeWRUVp3pnFG3{margin:4px;padding:5px;min-width:150px;min-height:36px;vertical-align:top;cursor:pointer;font-family:Segoe UI, SegoeUI, Arial, sans-serif;font-style:normal;font-weight:normal;font-size:15px;line-height:20px;text-align:center}._1XuCi2WhiqeWRUVp3pnFG3:focus{box-sizing:border-box}._1XuCi2WhiqeWRUVp3pnFG3:disabled{cursor:not-allowed}._2bvsb3ubApyZ0UGoQA9O9T{display:block;position:fixed;z-index:10000;top:0;left:0;width:100%;height:100%;background-color:rgba(255,255,255,0.6);overflow:auto;text-align:left}div[dir="rtl"]._2bvsb3ubApyZ0UGoQA9O9T{text-align:right}div[dir="rtl"] ._2bvsb3ubApyZ0UGoQA9O9T{left:auto;right:0}.AFsJE948muYyzCMktdzuk{position:relative;top:8%;margin-bottom:40px;margin-left:auto;margin-right:auto;box-sizing:border-box;width:640px;background-color:#fff;border:1px solid #0067B8}._3kWyBRbW_dgnMiEyx06Fu4{float:right;z-index:1;margin:2px;padding:12px;border:none;cursor:pointer;font-family:Segoe UI, SegoeUI, Arial, sans-serif;font-style:normal;font-weight:normal;font-size:13px;line-height:13px;display:flex;align-items:center;text-align:center;color:#666;background-color:#fff}div[dir="rtl"] ._3kWyBRbW_dgnMiEyx06Fu4{margin:2px;padding:12px;float:left}.uCYvKvHXrhjNgflv1VqdD{position:static;margin-top:36px;margin-left:36px;margin-right:36px}._17pX1m9O_W--iZbDt3Ta5r{margin-top:0;margin-bottom:12px;font-family:Segoe UI, SegoeUI, Arial, sans-serif;font-style:normal;font-weight:600;font-size:20px;line-height:24px;text-transform:none}._1kBkHQ1V1wu3kl-YcLgUr6{height:446px;overflow:auto}._20_nXDf6uFs9Q6wxRXG-I-{margin-top:0;font-family:Segoe UI, SegoeUI, Arial, sans-serif;font-style:normal;font-weight:normal;font-size:15px;line-height:20px}._20_nXDf6uFs9Q6wxRXG-I- a{text-decoration:underline}dl._2a0NH_GDQEQe5Ynfo7suVH{margin-top:36px;margin-bottom:0;padding:0;list-style:none;text-transform:none}dt._3j_LCPv7fyXv3A8FIXVwZ4{margin-top:20px;float:none;font-family:Segoe UI, SegoeUI, Arial, sans-serif;font-style:normal;font-weight:600;font-size:18px;line-height:24px;list-style:none}.k-vxTGFbdq1aOZB2HHpjh{margin:0;padding:0;border:none}._2Bucyy75c_ogoU1g-liB5R{margin:0;padding:0;border-bottom:none;font-family:Segoe UI, SegoeUI, Arial, sans-serif;font-style:normal;font-weight:600;font-size:18px;line-height:24px;text-transform:none}._63gwfzV8dclrsl2cfd90r{display:inline-block;margin-top:0;margin-bottom:13px;font-family:Segoe UI, SegoeUI, Arial, sans-serif;font-style:normal;font-weight:normal;font-size:15px;line-height:20px}._1l8wM_4mRYGz3Iu7l3BZR7{display:block}._2UE03QS02aZGkslegN_F-i{display:inline-block;position:relative;left:5px;margin-bottom:13px;margin-right:34px;padding:3px}div[dir="rtl"] ._2UE03QS02aZGkslegN_F-i{margin:0 0 13px 34px;padding:3px;float:none}div[dir="rtl"] ._2UE03QS02aZGkslegN_F-i{left:auto;right:5px}._23tra1HsiiP6cT-Cka-ycB *::before,._2bvsb3ubApyZ0UGoQA9O9T *::before,._23tra1HsiiP6cT-Cka-ycB *::after,._2bvsb3ubApyZ0UGoQA9O9T *::after{box-sizing:inherit}._1HSFn0HzGo6w4ADApV8-c4{outline:2px solid rgba(0,0,0,0.8)}input[type="radio"]._1dp8Vp5m3HwAqGx8qBmFV2{display:inline-block;position:relative;margin-top:0;margin-left:0;margin-right:0;height:0;width:0;border-radius:0;cursor:pointer;outline:none;box-sizing:border-box;-webkit-appearance:none;-moz-appearance:none;appearance:none}input[type="radio"]._1dp8Vp5m3HwAqGx8qBmFV2+label::before{display:block;position:absolute;top:5px;left:3px;height:19px;width:19px;content:"";border-radius:50%;border:1px solid #000;background-color:#fff}div[dir="rtl"] input[type="radio"]._1dp8Vp5m3HwAqGx8qBmFV2+label::before{left:auto;right:3px}input[type="radio"]._1dp8Vp5m3HwAqGx8qBmFV2:not(:disabled)+label:hover::before{border:1px solid #0067B8}input[type="radio"]._1dp8Vp5m3HwAqGx8qBmFV2:not(:disabled)+label:hover::after{display:block;position:absolute;top:10px;left:8px;height:9px;width:9px;content:"";border-radius:50%;background-color:rgba(0,0,0,0.8)}div[dir="rtl"] input[type="radio"]._1dp8Vp5m3HwAqGx8qBmFV2:not(:disabled)+label:hover::after{left:auto;right:8px}input[type="radio"]._1dp8Vp5m3HwAqGx8qBmFV2:not(:disabled)+label:focus::before{border:1px solid #0067B8}input[type="radio"]._1dp8Vp5m3HwAqGx8qBmFV2:not(:disabled)+label:focus::after{display:block;position:absolute;top:10px;left:8px;height:9px;width:9px;content:"";border-radius:50%;background-color:#000}div[dir="rtl"] input[type="radio"]._1dp8Vp5m3HwAqGx8qBmFV2:not(:disabled)+label:focus::after{left:auto;right:8px}input[type="radio"]._1dp8Vp5m3HwAqGx8qBmFV2:checked+label::after{display:block;position:absolute;top:10px;left:8px;height:9px;width:9px;content:"";border-radius:50%;background-color:#000}div[dir="rtl"] input[type="radio"]._1dp8Vp5m3HwAqGx8qBmFV2:checked+label::after{left:auto;right:8px}input[type="radio"]._1dp8Vp5m3HwAqGx8qBmFV2:disabled+label{cursor:not-allowed}input[type="radio"]._1dp8Vp5m3HwAqGx8qBmFV2:disabled+label::before{border:1px solid rgba(0,0,0,0.2);background-color:rgba(0,0,0,0.2)}._3RJzeL3l9Rl_lAQEm6VwdX{display:block;position:static;float:right;margin-top:0;margin-bottom:0;margin-left:19px;margin-right:0;padding-top:0;padding-bottom:0;padding-left:8px;padding-right:0;width:80%;width:calc(100% - 19px);font-family:Segoe UI, SegoeUI, Arial, sans-serif;font-style:normal;font-weight:normal;font-size:15px;line-height:20px;text-transform:none;cursor:pointer;box-sizing:border-box}div[dir="rtl"] ._3RJzeL3l9Rl_lAQEm6VwdX{margin:0 19px 0 0;padding:0 8px 0 0;float:left}.nohp3sIG12ZBhzcMnPala{margin-top:20px;margin-bottom:48px}._2uhaEsmeotZ3P-M0AXo2kF{padding:0;width:278px;height:36px;cursor:pointer;font-family:Segoe UI, SegoeUI, Arial, sans-serif;font-style:normal;font-weight:normal;font-size:15px;line-height:20px;text-align:center}._2uhaEsmeotZ3P-M0AXo2kF:focus{box-sizing:border-box}._2uhaEsmeotZ3P-M0AXo2kF:disabled{cursor:not-allowed}._3tOu1FJ59c_xz_PmI1lKV5{float:right;padding:0;width:278px;height:36px;cursor:pointer;font-family:Segoe UI, SegoeUI, Arial, sans-serif;font-style:normal;font-weight:normal;font-size:15px;line-height:20px;text-align:center}._3tOu1FJ59c_xz_PmI1lKV5:focus{box-sizing:border-box}._3tOu1FJ59c_xz_PmI1lKV5:disabled{cursor:not-allowed}div[dir="rtl"] ._3tOu1FJ59c_xz_PmI1lKV5{margin:0;padding:0;float:left}@media only screen and (max-width: 768px){._2j0fmugLb1FgYz6KPuB91w,._1Upc2NjY8AlDn177YoVj0y{padding-top:8px;padding-bottom:12px;padding-left:3.75%;padding-right:3.75%;margin:0;width:92.5%}._23tra1HsiiP6cT-Cka-ycB{display:block}._1XuCi2WhiqeWRUVp3pnFG3{margin-bottom:8px;margin-left:0;margin-right:0;width:100%}._2bvsb3ubApyZ0UGoQA9O9T{overflow:hidden}.AFsJE948muYyzCMktdzuk{top:1.8%;width:93.33%;height:96.4%;overflow:hidden}.uCYvKvHXrhjNgflv1VqdD{margin-top:24px;margin-left:24px;margin-right:24px;height:100%}._1kBkHQ1V1wu3kl-YcLgUr6{height:62%;height:calc(100% - 188px);min-height:50%}._2uhaEsmeotZ3P-M0AXo2kF{width:100%}._3tOu1FJ59c_xz_PmI1lKV5{margin-bottom:12px;margin-left:0;width:100%}div[dir="rtl"] ._3tOu1FJ59c_xz_PmI1lKV5{margin:0 0 12px 0;padding:0;float:none}}@media only screen and (max-width: 768px) and (orientation: landscape), only screen and (max-height: 260px), only screen and (max-width: 340px){.AFsJE948muYyzCMktdzuk{overflow:auto}}@media only screen and (max-height: 260px), only screen and (max-width: 340px){._1XuCi2WhiqeWRUVp3pnFG3{min-width:0}._3kWyBRbW_dgnMiEyx06Fu4{padding:3%}.uCYvKvHXrhjNgflv1VqdD{margin-top:3%;margin-left:3%;margin-right:3%}._17pX1m9O_W--iZbDt3Ta5r{margin-bottom:3%}._1kBkHQ1V1wu3kl-YcLgUr6{height:calc(79% - 64px)}.nohp3sIG12ZBhzcMnPala{margin-top:5%;margin-bottom:10%}._3tOu1FJ59c_xz_PmI1lKV5{margin-bottom:3%}div[dir="rtl"] ._3tOu1FJ59c_xz_PmI1lKV5{margin:0 0 3% 0;padding:0;float:none}}
</style><style type="text/css" id="ms-consent-banner-theme-styles">._23tra1HsiiP6cT-Cka-ycB {
            background-color: #24292f !important;
        }.w8hcgFksdo30C8w-bygqu {
            color: #ffffff !important;
        }.ydkKdaztSS0AeHWIeIHsQ a {
            color: #d8b9ff !important;
        }._2bvsb3ubApyZ0UGoQA9O9T {
            background-color: rgba(23, 23, 23, 0.8) !important;
        }.AFsJE948muYyzCMktdzuk {
            background-color: #24292f !important;
            border: 1px solid #d8b9ff !important;
        }._3kWyBRbW_dgnMiEyx06Fu4 {
            color: #d8b9ff !important;
            background-color: #24292f !important;
        }._1zNQOqxpBFSokeCLGi_hGr {
            border: 1px solid #ffffff !important;
            background-color: #ffffff !important;
            color: #1f2328 !important;
        }._1zNQOqxpBFSokeCLGi_hGr:enabled:hover {
            color: #1f2328 !important;
            background-color: #d8b9ff !important;
            box-shadow: none !important;
            border: 1px solid transparent !important;
        }._1zNQOqxpBFSokeCLGi_hGr:enabled:focus {
            background-color: #d8b9ff !important;
            box-shadow: none !important;
            border: 2px solid #ffffff !important;
        }._1zNQOqxpBFSokeCLGi_hGr:disabled {
            opacity: 0.5 !important;
            color: #1f2328 !important;
            background-color: #ffffff !important;
            border: 1px solid transparent !important;
        }.erL690_8JwUW-R4bJRcfl {
            border: 1px solid #eaeef2 !important;
            background-color: #32383f !important;
            color: #ffffff !important;
        }.erL690_8JwUW-R4bJRcfl:enabled:hover {
            color: #ffffff !important;
            background-color: #24292f !important;
            box-shadow: none !important;
            border: 1px solid #ffffff !important;
        }.erL690_8JwUW-R4bJRcfl:enabled:focus {
            background-color: #24292f !important;
            box-shadow: none !important;
            border: 2px solid #6e7781 !important;
        }.erL690_8JwUW-R4bJRcfl:disabled {
            opacity: 0.5 !important;
            color: #ffffff !important;
            background-color: #424a53 !important;
            border: 1px solid #6e7781 !important;
        }input[type="radio"]._1dp8Vp5m3HwAqGx8qBmFV2 + label::before {
            border: 1px solid #d8b9ff !important;
            background-color: #24292f !important;
        }._1HSFn0HzGo6w4ADApV8-c4 {
            outline: 2px solid #ffffff !important;
        }input[type="radio"]._1dp8Vp5m3HwAqGx8qBmFV2:checked + label::after {
            background-color: #d8b9ff !important;
        }input[type="radio"]._1dp8Vp5m3HwAqGx8qBmFV2 + label:hover::before {
            border: 1px solid #ffffff !important;
        }input[type="radio"]._1dp8Vp5m3HwAqGx8qBmFV2 + label:hover::after {
            background-color: #ffffff !important;
        }input[type="radio"]._1dp8Vp5m3HwAqGx8qBmFV2 + label:focus::before {
            border: 1px solid #ffffff !important;
        }input[type="radio"]._1dp8Vp5m3HwAqGx8qBmFV2 + label:focus::after {
            background-color: #d8b9ff !important;
        }input[type="radio"]._1dp8Vp5m3HwAqGx8qBmFV2:disabled + label::before {
            border: 1px solid rgba(227, 227, 227, 0.2) !important;
            background-color: rgba(227, 227, 227, 0.2) !important;
        }</style></head>

  <body class="logged-out env-production page-responsive" style="overflow-wrap: break-word; --dialog-scrollgutter: 15px;">
    <div data-turbo-body="" class="logged-out env-production page-responsive" style="word-wrap: break-word;">
      


    <div class="position-relative js-header-wrapper ">
      <a href="https://github.com/sayansarkar2001/weather_app/blob/main/src/currentLocation.js#start-of-content" data-skip-target-assigned="false" class="px-2 py-4 color-bg-accent-emphasis color-fg-on-emphasis show-on-focus js-skip-to-content">Skip to content</a>

      <span data-view-component="true" class="progress-pjax-loader Progress position-fixed width-full">
    <span style="width: 0%;" data-view-component="true" class="Progress-item progress-pjax-loader-bar left-0 top-0 color-bg-accent-emphasis"></span>
</span>      
      
      






<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./apiKeys_files/vendors-node_modules_primer_react_lib-esm_Dialog_Dialog_js-node_modules_primer_react_lib-esm_-af9f6c-3302f8847623.js.download"></script>

<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./apiKeys_files/keyboard-shortcuts-dialog-a7f7ecf0fc14.js.download"></script>

<react-partial partial-name="keyboard-shortcuts-dialog" data-ssr="false" data-catalyst="" class="loaded">
  
  <script type="application/json" data-target="react-partial.embeddedData">{"props":{"docsUrl":"https://docs.github.com/get-started/accessibility/keyboard-shortcuts"}}</script>
  <div data-target="react-partial.reactRoot"><script type="application/json" id="__PRIMER_DATA_:r2h:__">{"resolvedServerColorMode":"day"}</script></div>
</react-partial>




      

          

              
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./apiKeys_files/vendors-node_modules_github_remote-form_dist_index_js-node_modules_delegated-events_dist_inde-94fd67-f094580c6608.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./apiKeys_files/sessions-e3f50a300327.js.download"></script>
<header class="HeaderMktg header-logged-out js-details-container js-header Details position-relative f4 py-3" role="banner" data-color-mode="light" data-light-theme="light" data-dark-theme="dark">
  <h2 class="sr-only">Navigation Menu</h2>

  <button type="button" class="HeaderMktg-backdrop d-lg-none border-0 position-fixed top-0 left-0 width-full height-full js-details-target" aria-label="Toggle navigation">
    <span class="d-none">Toggle navigation</span>
  </button>

  <div class="d-flex flex-column flex-lg-row flex-items-center px-3 px-md-4 px-lg-5 height-full position-relative z-1">
    <div class="d-flex flex-justify-between flex-items-center width-full width-lg-auto">
      <a class="mr-lg-3 color-fg-inherit flex-order-2" href="https://github.com/" aria-label="Homepage" data-analytics-event="{&quot;category&quot;:&quot;Marketing nav&quot;,&quot;action&quot;:&quot;click to go to homepage&quot;,&quot;label&quot;:&quot;ref_page:Marketing;ref_cta:Logomark;ref_loc:Header&quot;}">
        <svg height="32" aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="32" data-view-component="true" class="octicon octicon-mark-github">
    <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
</svg>
      </a>

      <div class="flex-1">
        <button aria-label="Toggle navigation" aria-expanded="false" type="button" data-view-component="true" class="js-details-target js-nav-padding-recalculate Button--link Button--medium Button d-lg-none color-fg-inherit p-1">  <span class="Button-content">
    <span class="Button-label"><div class="HeaderMenu-toggle-bar rounded my-1"></div>
            <div class="HeaderMenu-toggle-bar rounded my-1"></div>
            <div class="HeaderMenu-toggle-bar rounded my-1"></div></span>
  </span>
</button>
      </div>

      <div class="flex-1 flex-order-2 text-right">
          <a href="https://github.com/login?return_to=https%3A%2F%2Fgithub.com%2Fsayansarkar2001%2Fweather_app%2Fblob%2Fmain%2Fsrc%2FApp.test.js" class="HeaderMenu-link HeaderMenu-button d-inline-flex d-lg-none flex-order-1 f5 no-underline border color-border-default rounded-2 px-2 py-1 color-fg-inherit" data-hydro-click="{&quot;event_type&quot;:&quot;authentication.click&quot;,&quot;payload&quot;:{&quot;location_in_page&quot;:&quot;site header menu&quot;,&quot;repository_id&quot;:null,&quot;auth_type&quot;:&quot;SIGN_UP&quot;,&quot;originating_url&quot;:&quot;https://github.com/sayansarkar2001/weather_app/blob/main/src/App.test.js&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="1f751fe2d9455d595509c6d96eaa6b10d72baeb6aacd1a6c7d25de5e2c75dd23" data-analytics-event="{&quot;category&quot;:&quot;Marketing nav&quot;,&quot;action&quot;:&quot;click to Sign in&quot;,&quot;label&quot;:&quot;ref_page:Marketing;ref_cta:Sign in;ref_loc:Header&quot;}">
            Sign in
          </a>
      </div>
    </div>


    <div class="HeaderMenu js-header-menu height-fit position-lg-relative d-lg-flex flex-column flex-auto top-0">
      <div class="HeaderMenu-wrapper d-flex flex-column flex-self-start flex-lg-row flex-auto rounded rounded-lg-0">
          <nav class="HeaderMenu-nav" aria-label="Global">
            <ul class="d-lg-flex list-style-none">
                <li class="HeaderMenu-item position-relative flex-wrap flex-justify-between flex-items-center d-block d-lg-flex flex-lg-nowrap flex-lg-items-center js-details-container js-header-menu-item">
      <button type="button" class="HeaderMenu-link border-0 width-full width-lg-auto px-0 px-lg-2 py-lg-2 no-wrap d-flex flex-items-center flex-justify-between js-details-target" aria-expanded="false">
        Product
        <svg opacity="0.5" aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-chevron-down HeaderMenu-icon ml-1">
    <path d="M12.78 5.22a.749.749 0 0 1 0 1.06l-4.25 4.25a.749.749 0 0 1-1.06 0L3.22 6.28a.749.749 0 1 1 1.06-1.06L8 8.939l3.72-3.719a.749.749 0 0 1 1.06 0Z"></path>
</svg>
      </button>
      <div class="HeaderMenu-dropdown dropdown-menu rounded m-0 p-0 py-2 py-lg-4 position-relative position-lg-absolute left-0 left-lg-n3 d-lg-flex dropdown-menu-wide">
          <div class="px-lg-4 border-lg-right mb-4 mb-lg-0 pr-lg-7">
            <ul class="list-style-none f5">
                <li>
  <a class="HeaderMenu-dropdown-link d-block no-underline position-relative py-2 Link--secondary d-flex flex-items-center Link--has-description pb-lg-3" data-analytics-event="{&quot;category&quot;:&quot;Header dropdown (logged out), Product&quot;,&quot;action&quot;:&quot;click to go to Actions&quot;,&quot;label&quot;:&quot;ref_cta:Actions;&quot;}" href="https://github.com/features/actions">
      <svg aria-hidden="true" height="24" viewBox="0 0 24 24" version="1.1" width="24" data-view-component="true" class="octicon octicon-workflow color-fg-subtle mr-3">
    <path d="M1 3a2 2 0 0 1 2-2h6.5a2 2 0 0 1 2 2v6.5a2 2 0 0 1-2 2H7v4.063C7 16.355 7.644 17 8.438 17H12.5v-2.5a2 2 0 0 1 2-2H21a2 2 0 0 1 2 2V21a2 2 0 0 1-2 2h-6.5a2 2 0 0 1-2-2v-2.5H8.437A2.939 2.939 0 0 1 5.5 15.562V11.5H3a2 2 0 0 1-2-2Zm2-.5a.5.5 0 0 0-.5.5v6.5a.5.5 0 0 0 .5.5h6.5a.5.5 0 0 0 .5-.5V3a.5.5 0 0 0-.5-.5ZM14.5 14a.5.5 0 0 0-.5.5V21a.5.5 0 0 0 .5.5H21a.5.5 0 0 0 .5-.5v-6.5a.5.5 0 0 0-.5-.5Z"></path>
</svg>
      <div>
        <div class="color-fg-default h4">Actions</div>
        Automate any workflow
      </div>

    
</a></li>

                <li>
  <a class="HeaderMenu-dropdown-link d-block no-underline position-relative py-2 Link--secondary d-flex flex-items-center Link--has-description pb-lg-3" data-analytics-event="{&quot;category&quot;:&quot;Header dropdown (logged out), Product&quot;,&quot;action&quot;:&quot;click to go to Packages&quot;,&quot;label&quot;:&quot;ref_cta:Packages;&quot;}" href="https://github.com/features/packages">
      <svg aria-hidden="true" height="24" viewBox="0 0 24 24" version="1.1" width="24" data-view-component="true" class="octicon octicon-package color-fg-subtle mr-3">
    <path d="M12.876.64V.639l8.25 4.763c.541.313.875.89.875 1.515v9.525a1.75 1.75 0 0 1-.875 1.516l-8.25 4.762a1.748 1.748 0 0 1-1.75 0l-8.25-4.763a1.75 1.75 0 0 1-.875-1.515V6.917c0-.625.334-1.202.875-1.515L11.126.64a1.748 1.748 0 0 1 1.75 0Zm-1 1.298L4.251 6.34l7.75 4.474 7.75-4.474-7.625-4.402a.248.248 0 0 0-.25 0Zm.875 19.123 7.625-4.402a.25.25 0 0 0 .125-.216V7.639l-7.75 4.474ZM3.501 7.64v8.803c0 .09.048.172.125.216l7.625 4.402v-8.947Z"></path>
</svg>
      <div>
        <div class="color-fg-default h4">Packages</div>
        Host and manage packages
      </div>

    
</a></li>

                <li>
  <a class="HeaderMenu-dropdown-link d-block no-underline position-relative py-2 Link--secondary d-flex flex-items-center Link--has-description pb-lg-3" data-analytics-event="{&quot;category&quot;:&quot;Header dropdown (logged out), Product&quot;,&quot;action&quot;:&quot;click to go to Security&quot;,&quot;label&quot;:&quot;ref_cta:Security;&quot;}" href="https://github.com/features/security">
      <svg aria-hidden="true" height="24" viewBox="0 0 24 24" version="1.1" width="24" data-view-component="true" class="octicon octicon-shield-check color-fg-subtle mr-3">
    <path d="M16.53 9.78a.75.75 0 0 0-1.06-1.06L11 13.19l-1.97-1.97a.75.75 0 0 0-1.06 1.06l2.5 2.5a.75.75 0 0 0 1.06 0l5-5Z"></path><path d="m12.54.637 8.25 2.675A1.75 1.75 0 0 1 22 4.976V10c0 6.19-3.771 10.704-9.401 12.83a1.704 1.704 0 0 1-1.198 0C5.77 20.705 2 16.19 2 10V4.976c0-.758.489-1.43 1.21-1.664L11.46.637a1.748 1.748 0 0 1 1.08 0Zm-.617 1.426-8.25 2.676a.249.249 0 0 0-.173.237V10c0 5.46 3.28 9.483 8.43 11.426a.199.199 0 0 0 .14 0C17.22 19.483 20.5 15.461 20.5 10V4.976a.25.25 0 0 0-.173-.237l-8.25-2.676a.253.253 0 0 0-.154 0Z"></path>
</svg>
      <div>
        <div class="color-fg-default h4">Security</div>
        Find and fix vulnerabilities
      </div>

    
</a></li>

                <li>
  <a class="HeaderMenu-dropdown-link d-block no-underline position-relative py-2 Link--secondary d-flex flex-items-center Link--has-description pb-lg-3" data-analytics-event="{&quot;category&quot;:&quot;Header dropdown (logged out), Product&quot;,&quot;action&quot;:&quot;click to go to Codespaces&quot;,&quot;label&quot;:&quot;ref_cta:Codespaces;&quot;}" href="https://github.com/features/codespaces">
      <svg aria-hidden="true" height="24" viewBox="0 0 24 24" version="1.1" width="24" data-view-component="true" class="octicon octicon-codespaces color-fg-subtle mr-3">
    <path d="M3.5 3.75C3.5 2.784 4.284 2 5.25 2h13.5c.966 0 1.75.784 1.75 1.75v7.5A1.75 1.75 0 0 1 18.75 13H5.25a1.75 1.75 0 0 1-1.75-1.75Zm-2 12c0-.966.784-1.75 1.75-1.75h17.5c.966 0 1.75.784 1.75 1.75v4a1.75 1.75 0 0 1-1.75 1.75H3.25a1.75 1.75 0 0 1-1.75-1.75ZM5.25 3.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h13.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Zm-2 12a.25.25 0 0 0-.25.25v4c0 .138.112.25.25.25h17.5a.25.25 0 0 0 .25-.25v-4a.25.25 0 0 0-.25-.25Z"></path><path d="M10 17.75a.75.75 0 0 1 .75-.75h6.5a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1-.75-.75Zm-4 0a.75.75 0 0 1 .75-.75h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1-.75-.75Z"></path>
</svg>
      <div>
        <div class="color-fg-default h4">Codespaces</div>
        Instant dev environments
      </div>

    
</a></li>

                <li>
  <a class="HeaderMenu-dropdown-link d-block no-underline position-relative py-2 Link--secondary d-flex flex-items-center Link--has-description pb-lg-3" data-analytics-event="{&quot;category&quot;:&quot;Header dropdown (logged out), Product&quot;,&quot;action&quot;:&quot;click to go to GitHub Copilot&quot;,&quot;label&quot;:&quot;ref_cta:GitHub Copilot;&quot;}" href="https://github.com/features/copilot">
      <svg aria-hidden="true" height="24" viewBox="0 0 24 24" version="1.1" width="24" data-view-component="true" class="octicon octicon-copilot color-fg-subtle mr-3">
    <path d="M23.922 16.992c-.861 1.495-5.859 5.023-11.922 5.023-6.063 0-11.061-3.528-11.922-5.023A.641.641 0 0 1 0 16.736v-2.869a.841.841 0 0 1 .053-.22c.372-.935 1.347-2.292 2.605-2.656.167-.429.414-1.055.644-1.517a10.195 10.195 0 0 1-.052-1.086c0-1.331.282-2.499 1.132-3.368.397-.406.89-.717 1.474-.952 1.399-1.136 3.392-2.093 6.122-2.093 2.731 0 4.767.957 6.166 2.093.584.235 1.077.546 1.474.952.85.869 1.132 2.037 1.132 3.368 0 .368-.014.733-.052 1.086.23.462.477 1.088.644 1.517 1.258.364 2.233 1.721 2.605 2.656a.832.832 0 0 1 .053.22v2.869a.641.641 0 0 1-.078.256ZM12.172 11h-.344a4.323 4.323 0 0 1-.355.508C10.703 12.455 9.555 13 7.965 13c-1.725 0-2.989-.359-3.782-1.259a2.005 2.005 0 0 1-.085-.104L4 11.741v6.585c1.435.779 4.514 2.179 8 2.179 3.486 0 6.565-1.4 8-2.179v-6.585l-.098-.104s-.033.045-.085.104c-.793.9-2.057 1.259-3.782 1.259-1.59 0-2.738-.545-3.508-1.492a4.323 4.323 0 0 1-.355-.508h-.016.016Zm.641-2.935c.136 1.057.403 1.913.878 2.497.442.544 1.134.938 2.344.938 1.573 0 2.292-.337 2.657-.751.384-.435.558-1.15.558-2.361 0-1.14-.243-1.847-.705-2.319-.477-.488-1.319-.862-2.824-1.025-1.487-.161-2.192.138-2.533.529-.269.307-.437.808-.438 1.578v.021c0 .265.021.562.063.893Zm-1.626 0c.042-.331.063-.628.063-.894v-.02c-.001-.77-.169-1.271-.438-1.578-.341-.391-1.046-.69-2.533-.529-1.505.163-2.347.537-2.824 1.025-.462.472-.705 1.179-.705 2.319 0 1.211.175 1.926.558 2.361.365.414 1.084.751 2.657.751 1.21 0 1.902-.394 2.344-.938.475-.584.742-1.44.878-2.497Z"></path><path d="M14.5 14.25a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0v-2a1 1 0 0 1 1-1Zm-5 0a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0v-2a1 1 0 0 1 1-1Z"></path>
</svg>
      <div>
        <div class="color-fg-default h4">GitHub Copilot</div>
        Write better code with AI
      </div>

    
</a></li>

                <li>
  <a class="HeaderMenu-dropdown-link d-block no-underline position-relative py-2 Link--secondary d-flex flex-items-center Link--has-description pb-lg-3" data-analytics-event="{&quot;category&quot;:&quot;Header dropdown (logged out), Product&quot;,&quot;action&quot;:&quot;click to go to Code review&quot;,&quot;label&quot;:&quot;ref_cta:Code review;&quot;}" href="https://github.com/features/code-review">
      <svg aria-hidden="true" height="24" viewBox="0 0 24 24" version="1.1" width="24" data-view-component="true" class="octicon octicon-code-review color-fg-subtle mr-3">
    <path d="M10.3 6.74a.75.75 0 0 1-.04 1.06l-2.908 2.7 2.908 2.7a.75.75 0 1 1-1.02 1.1l-3.5-3.25a.75.75 0 0 1 0-1.1l3.5-3.25a.75.75 0 0 1 1.06.04Zm3.44 1.06a.75.75 0 1 1 1.02-1.1l3.5 3.25a.75.75 0 0 1 0 1.1l-3.5 3.25a.75.75 0 1 1-1.02-1.1l2.908-2.7-2.908-2.7Z"></path><path d="M1.5 4.25c0-.966.784-1.75 1.75-1.75h17.5c.966 0 1.75.784 1.75 1.75v12.5a1.75 1.75 0 0 1-1.75 1.75h-9.69l-3.573 3.573A1.458 1.458 0 0 1 5 21.043V18.5H3.25a1.75 1.75 0 0 1-1.75-1.75ZM3.25 4a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h2.5a.75.75 0 0 1 .75.75v3.19l3.72-3.72a.749.749 0 0 1 .53-.22h10a.25.25 0 0 0 .25-.25V4.25a.25.25 0 0 0-.25-.25Z"></path>
</svg>
      <div>
        <div class="color-fg-default h4">Code review</div>
        Manage code changes
      </div>

    
</a></li>

                <li>
  <a class="HeaderMenu-dropdown-link d-block no-underline position-relative py-2 Link--secondary d-flex flex-items-center Link--has-description pb-lg-3" data-analytics-event="{&quot;category&quot;:&quot;Header dropdown (logged out), Product&quot;,&quot;action&quot;:&quot;click to go to Issues&quot;,&quot;label&quot;:&quot;ref_cta:Issues;&quot;}" href="https://github.com/features/issues">
      <svg aria-hidden="true" height="24" viewBox="0 0 24 24" version="1.1" width="24" data-view-component="true" class="octicon octicon-issue-opened color-fg-subtle mr-3">
    <path d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1ZM2.5 12a9.5 9.5 0 0 0 9.5 9.5 9.5 9.5 0 0 0 9.5-9.5A9.5 9.5 0 0 0 12 2.5 9.5 9.5 0 0 0 2.5 12Zm9.5 2a2 2 0 1 1-.001-3.999A2 2 0 0 1 12 14Z"></path>
</svg>
      <div>
        <div class="color-fg-default h4">Issues</div>
        Plan and track work
      </div>

    
</a></li>

                <li>
  <a class="HeaderMenu-dropdown-link d-block no-underline position-relative py-2 Link--secondary d-flex flex-items-center Link--has-description" data-analytics-event="{&quot;category&quot;:&quot;Header dropdown (logged out), Product&quot;,&quot;action&quot;:&quot;click to go to Discussions&quot;,&quot;label&quot;:&quot;ref_cta:Discussions;&quot;}" href="https://github.com/features/discussions">
      <svg aria-hidden="true" height="24" viewBox="0 0 24 24" version="1.1" width="24" data-view-component="true" class="octicon octicon-comment-discussion color-fg-subtle mr-3">
    <path d="M1.75 1h12.5c.966 0 1.75.784 1.75 1.75v9.5A1.75 1.75 0 0 1 14.25 14H8.061l-2.574 2.573A1.458 1.458 0 0 1 3 15.543V14H1.75A1.75 1.75 0 0 1 0 12.25v-9.5C0 1.784.784 1 1.75 1ZM1.5 2.75v9.5c0 .138.112.25.25.25h2a.75.75 0 0 1 .75.75v2.19l2.72-2.72a.749.749 0 0 1 .53-.22h6.5a.25.25 0 0 0 .25-.25v-9.5a.25.25 0 0 0-.25-.25H1.75a.25.25 0 0 0-.25.25Z"></path><path d="M22.5 8.75a.25.25 0 0 0-.25-.25h-3.5a.75.75 0 0 1 0-1.5h3.5c.966 0 1.75.784 1.75 1.75v9.5A1.75 1.75 0 0 1 22.25 20H21v1.543a1.457 1.457 0 0 1-2.487 1.03L15.939 20H10.75A1.75 1.75 0 0 1 9 18.25v-1.465a.75.75 0 0 1 1.5 0v1.465c0 .138.112.25.25.25h5.5a.75.75 0 0 1 .53.22l2.72 2.72v-2.19a.75.75 0 0 1 .75-.75h2a.25.25 0 0 0 .25-.25v-9.5Z"></path>
</svg>
      <div>
        <div class="color-fg-default h4">Discussions</div>
        Collaborate outside of code
      </div>

    
</a></li>

            </ul>
          </div>
          <div class="px-lg-4">
              <span class="d-block h4 color-fg-default my-1" id="product-explore-heading">Explore</span>
            <ul class="list-style-none f5" aria-labelledby="product-explore-heading">
                <li>
  <a class="HeaderMenu-dropdown-link d-block no-underline position-relative py-2 Link--secondary" data-analytics-event="{&quot;category&quot;:&quot;Header dropdown (logged out), Product&quot;,&quot;action&quot;:&quot;click to go to All features&quot;,&quot;label&quot;:&quot;ref_cta:All features;&quot;}" href="https://github.com/features">
      All features

    
</a></li>

                <li>
  <a class="HeaderMenu-dropdown-link d-block no-underline position-relative py-2 Link--secondary Link--external" target="_blank" data-analytics-event="{&quot;category&quot;:&quot;Header dropdown (logged out), Product&quot;,&quot;action&quot;:&quot;click to go to Documentation&quot;,&quot;label&quot;:&quot;ref_cta:Documentation;&quot;}" href="https://docs.github.com/">
      Documentation

    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-link-external HeaderMenu-external-icon color-fg-subtle">
    <path d="M3.75 2h3.5a.75.75 0 0 1 0 1.5h-3.5a.25.25 0 0 0-.25.25v8.5c0 .138.112.25.25.25h8.5a.25.25 0 0 0 .25-.25v-3.5a.75.75 0 0 1 1.5 0v3.5A1.75 1.75 0 0 1 12.25 14h-8.5A1.75 1.75 0 0 1 2 12.25v-8.5C2 2.784 2.784 2 3.75 2Zm6.854-1h4.146a.25.25 0 0 1 .25.25v4.146a.25.25 0 0 1-.427.177L13.03 4.03 9.28 7.78a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042l3.75-3.75-1.543-1.543A.25.25 0 0 1 10.604 1Z"></path>
</svg>
</a></li>

                <li>
  <a class="HeaderMenu-dropdown-link d-block no-underline position-relative py-2 Link--secondary Link--external" target="_blank" data-analytics-event="{&quot;category&quot;:&quot;Header dropdown (logged out), Product&quot;,&quot;action&quot;:&quot;click to go to GitHub Skills&quot;,&quot;label&quot;:&quot;ref_cta:GitHub Skills;&quot;}" href="https://skills.github.com/">
      GitHub Skills

    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-link-external HeaderMenu-external-icon color-fg-subtle">
    <path d="M3.75 2h3.5a.75.75 0 0 1 0 1.5h-3.5a.25.25 0 0 0-.25.25v8.5c0 .138.112.25.25.25h8.5a.25.25 0 0 0 .25-.25v-3.5a.75.75 0 0 1 1.5 0v3.5A1.75 1.75 0 0 1 12.25 14h-8.5A1.75 1.75 0 0 1 2 12.25v-8.5C2 2.784 2.784 2 3.75 2Zm6.854-1h4.146a.25.25 0 0 1 .25.25v4.146a.25.25 0 0 1-.427.177L13.03 4.03 9.28 7.78a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042l3.75-3.75-1.543-1.543A.25.25 0 0 1 10.604 1Z"></path>
</svg>
</a></li>

                <li>
  <a class="HeaderMenu-dropdown-link d-block no-underline position-relative py-2 Link--secondary Link--external" target="_blank" data-analytics-event="{&quot;category&quot;:&quot;Header dropdown (logged out), Product&quot;,&quot;action&quot;:&quot;click to go to Blog&quot;,&quot;label&quot;:&quot;ref_cta:Blog;&quot;}" href="https://github.blog/">
      Blog

    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-link-external HeaderMenu-external-icon color-fg-subtle">
    <path d="M3.75 2h3.5a.75.75 0 0 1 0 1.5h-3.5a.25.25 0 0 0-.25.25v8.5c0 .138.112.25.25.25h8.5a.25.25 0 0 0 .25-.25v-3.5a.75.75 0 0 1 1.5 0v3.5A1.75 1.75 0 0 1 12.25 14h-8.5A1.75 1.75 0 0 1 2 12.25v-8.5C2 2.784 2.784 2 3.75 2Zm6.854-1h4.146a.25.25 0 0 1 .25.25v4.146a.25.25 0 0 1-.427.177L13.03 4.03 9.28 7.78a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042l3.75-3.75-1.543-1.543A.25.25 0 0 1 10.604 1Z"></path>
</svg>
</a></li>

            </ul>
          </div>
      </div>
</li>


                <li class="HeaderMenu-item position-relative flex-wrap flex-justify-between flex-items-center d-block d-lg-flex flex-lg-nowrap flex-lg-items-center js-details-container js-header-menu-item">
      <button type="button" class="HeaderMenu-link border-0 width-full width-lg-auto px-0 px-lg-2 py-lg-2 no-wrap d-flex flex-items-center flex-justify-between js-details-target" aria-expanded="false">
        Solutions
        <svg opacity="0.5" aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-chevron-down HeaderMenu-icon ml-1">
    <path d="M12.78 5.22a.749.749 0 0 1 0 1.06l-4.25 4.25a.749.749 0 0 1-1.06 0L3.22 6.28a.749.749 0 1 1 1.06-1.06L8 8.939l3.72-3.719a.749.749 0 0 1 1.06 0Z"></path>
</svg>
      </button>
      <div class="HeaderMenu-dropdown dropdown-menu rounded m-0 p-0 py-2 py-lg-4 position-relative position-lg-absolute left-0 left-lg-n3 px-lg-4">
          <div class="border-bottom pb-3 mb-3">
              <span class="d-block h4 color-fg-default my-1" id="solutions-by-size-heading">By size</span>
            <ul class="list-style-none f5" aria-labelledby="solutions-by-size-heading">
                <li>
  <a class="HeaderMenu-dropdown-link d-block no-underline position-relative py-2 Link--secondary" data-analytics-event="{&quot;category&quot;:&quot;Header dropdown (logged out), Solutions&quot;,&quot;action&quot;:&quot;click to go to Enterprise&quot;,&quot;label&quot;:&quot;ref_cta:Enterprise;&quot;}" href="https://github.com/enterprise">
      Enterprise

    
</a></li>

                <li>
  <a class="HeaderMenu-dropdown-link d-block no-underline position-relative py-2 Link--secondary" data-analytics-event="{&quot;category&quot;:&quot;Header dropdown (logged out), Solutions&quot;,&quot;action&quot;:&quot;click to go to Teams&quot;,&quot;label&quot;:&quot;ref_cta:Teams;&quot;}" href="https://github.com/team">
      Teams

    
</a></li>

                <li>
  <a class="HeaderMenu-dropdown-link d-block no-underline position-relative py-2 Link--secondary" data-analytics-event="{&quot;category&quot;:&quot;Header dropdown (logged out), Solutions&quot;,&quot;action&quot;:&quot;click to go to Startups&quot;,&quot;label&quot;:&quot;ref_cta:Startups;&quot;}" href="https://github.com/enterprise/startups">
      Startups

    
</a></li>

            </ul>
          </div>
          <div class="border-bottom pb-3 mb-3">
              <span class="d-block h4 color-fg-default my-1" id="solutions-by-industry-heading">By industry</span>
            <ul class="list-style-none f5" aria-labelledby="solutions-by-industry-heading">
                <li>
  <a class="HeaderMenu-dropdown-link d-block no-underline position-relative py-2 Link--secondary" data-analytics-event="{&quot;category&quot;:&quot;Header dropdown (logged out), Solutions&quot;,&quot;action&quot;:&quot;click to go to Healthcare&quot;,&quot;label&quot;:&quot;ref_cta:Healthcare;&quot;}" href="https://github.com/solutions/industries/healthcare">
      Healthcare

    
</a></li>

                <li>
  <a class="HeaderMenu-dropdown-link d-block no-underline position-relative py-2 Link--secondary" data-analytics-event="{&quot;category&quot;:&quot;Header dropdown (logged out), Solutions&quot;,&quot;action&quot;:&quot;click to go to Financial services&quot;,&quot;label&quot;:&quot;ref_cta:Financial services;&quot;}" href="https://github.com/solutions/industries/financial-services">
      Financial services

    
</a></li>

                <li>
  <a class="HeaderMenu-dropdown-link d-block no-underline position-relative py-2 Link--secondary" data-analytics-event="{&quot;category&quot;:&quot;Header dropdown (logged out), Solutions&quot;,&quot;action&quot;:&quot;click to go to Manufacturing&quot;,&quot;label&quot;:&quot;ref_cta:Manufacturing;&quot;}" href="https://github.com/solutions/industries/manufacturing">
      Manufacturing

    
</a></li>

            </ul>
          </div>
          <div class="">
              <span class="d-block h4 color-fg-default my-1" id="solutions-by-use-case-heading">By use case</span>
            <ul class="list-style-none f5" aria-labelledby="solutions-by-use-case-heading">
                <li>
  <a class="HeaderMenu-dropdown-link d-block no-underline position-relative py-2 Link--secondary" data-analytics-event="{&quot;category&quot;:&quot;Header dropdown (logged out), Solutions&quot;,&quot;action&quot;:&quot;click to go to CI/CD &amp;amp; Automation&quot;,&quot;label&quot;:&quot;ref_cta:CI/CD &amp;amp; Automation;&quot;}" href="https://github.com/solutions/ci-cd">
      CI/CD &amp; Automation

    
</a></li>

                <li>
  <a class="HeaderMenu-dropdown-link d-block no-underline position-relative py-2 Link--secondary" data-analytics-event="{&quot;category&quot;:&quot;Header dropdown (logged out), Solutions&quot;,&quot;action&quot;:&quot;click to go to DevOps&quot;,&quot;label&quot;:&quot;ref_cta:DevOps;&quot;}" href="https://github.com/solutions/devops">
      DevOps

    
</a></li>

                <li>
  <a class="HeaderMenu-dropdown-link d-block no-underline position-relative py-2 Link--secondary" data-analytics-event="{&quot;category&quot;:&quot;Header dropdown (logged out), Solutions&quot;,&quot;action&quot;:&quot;click to go to DevSecOps&quot;,&quot;label&quot;:&quot;ref_cta:DevSecOps;&quot;}" href="https://github.com/solutions/devsecops">
      DevSecOps

    
</a></li>

            </ul>
          </div>
      </div>
</li>

                  <li class="HeaderMenu-item position-relative flex-wrap flex-justify-between flex-items-center d-block d-lg-flex flex-lg-nowrap flex-lg-items-center js-details-container js-header-menu-item">
      <button type="button" class="HeaderMenu-link border-0 width-full width-lg-auto px-0 px-lg-2 py-lg-2 no-wrap d-flex flex-items-center flex-justify-between js-details-target" aria-expanded="false">
        Resources
        <svg opacity="0.5" aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-chevron-down HeaderMenu-icon ml-1">
    <path d="M12.78 5.22a.749.749 0 0 1 0 1.06l-4.25 4.25a.749.749 0 0 1-1.06 0L3.22 6.28a.749.749 0 1 1 1.06-1.06L8 8.939l3.72-3.719a.749.749 0 0 1 1.06 0Z"></path>
</svg>
      </button>
      <div class="HeaderMenu-dropdown dropdown-menu rounded m-0 p-0 py-2 py-lg-4 position-relative position-lg-absolute left-0 left-lg-n3 d-lg-flex dropdown-menu-wide">
          <div class="px-lg-4 border-lg-right mb-4 mb-lg-0 pr-lg-7">
              <span class="d-block h4 color-fg-default my-1" id="resources-topics-heading">Topics</span>
            <ul class="list-style-none f5" aria-labelledby="resources-topics-heading">
                <li>
  <a class="HeaderMenu-dropdown-link d-block no-underline position-relative py-2 Link--secondary" data-analytics-event="{&quot;category&quot;:&quot;Header dropdown (logged out), Resources&quot;,&quot;action&quot;:&quot;click to go to AI&quot;,&quot;label&quot;:&quot;ref_cta:AI;&quot;}" href="https://github.com/resources/articles/ai">
      AI

    
</a></li>

                <li>
  <a class="HeaderMenu-dropdown-link d-block no-underline position-relative py-2 Link--secondary" data-analytics-event="{&quot;category&quot;:&quot;Header dropdown (logged out), Resources&quot;,&quot;action&quot;:&quot;click to go to DevOps&quot;,&quot;label&quot;:&quot;ref_cta:DevOps;&quot;}" href="https://github.com/resources/articles/devops">
      DevOps

    
</a></li>

                <li>
  <a class="HeaderMenu-dropdown-link d-block no-underline position-relative py-2 Link--secondary" data-analytics-event="{&quot;category&quot;:&quot;Header dropdown (logged out), Resources&quot;,&quot;action&quot;:&quot;click to go to Innersource&quot;,&quot;label&quot;:&quot;ref_cta:Innersource;&quot;}" href="https://github.com/resources/articles/innersource">
      Innersource

    
</a></li>

                <li>
  <a class="HeaderMenu-dropdown-link d-block no-underline position-relative py-2 Link--secondary" data-analytics-event="{&quot;category&quot;:&quot;Header dropdown (logged out), Resources&quot;,&quot;action&quot;:&quot;click to go to Open Source&quot;,&quot;label&quot;:&quot;ref_cta:Open Source;&quot;}" href="https://github.com/resources/articles/open-source">
      Open Source

    
</a></li>

                <li>
  <a class="HeaderMenu-dropdown-link d-block no-underline position-relative py-2 Link--secondary" data-analytics-event="{&quot;category&quot;:&quot;Header dropdown (logged out), Resources&quot;,&quot;action&quot;:&quot;click to go to Security&quot;,&quot;label&quot;:&quot;ref_cta:Security;&quot;}" href="https://github.com/resources/articles/security">
      Security

    
</a></li>

                <li>
  <a class="HeaderMenu-dropdown-link d-block no-underline position-relative py-2 Link--secondary" data-analytics-event="{&quot;category&quot;:&quot;Header dropdown (logged out), Resources&quot;,&quot;action&quot;:&quot;click to go to Software Development&quot;,&quot;label&quot;:&quot;ref_cta:Software Development;&quot;}" href="https://github.com/resources/articles/software-development">
      Software Development

    
</a></li>

            </ul>
          </div>
          <div class="px-lg-4">
              <span class="d-block h4 color-fg-default my-1" id="resources-explore-heading">Explore</span>
            <ul class="list-style-none f5" aria-labelledby="resources-explore-heading">
                <li>
  <a class="HeaderMenu-dropdown-link d-block no-underline position-relative py-2 Link--secondary Link--external" target="_blank" data-analytics-event="{&quot;category&quot;:&quot;Header dropdown (logged out), Resources&quot;,&quot;action&quot;:&quot;click to go to Learning Pathways&quot;,&quot;label&quot;:&quot;ref_cta:Learning Pathways;&quot;}" href="https://resources.github.com/learn/pathways">
      Learning Pathways

    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-link-external HeaderMenu-external-icon color-fg-subtle">
    <path d="M3.75 2h3.5a.75.75 0 0 1 0 1.5h-3.5a.25.25 0 0 0-.25.25v8.5c0 .138.112.25.25.25h8.5a.25.25 0 0 0 .25-.25v-3.5a.75.75 0 0 1 1.5 0v3.5A1.75 1.75 0 0 1 12.25 14h-8.5A1.75 1.75 0 0 1 2 12.25v-8.5C2 2.784 2.784 2 3.75 2Zm6.854-1h4.146a.25.25 0 0 1 .25.25v4.146a.25.25 0 0 1-.427.177L13.03 4.03 9.28 7.78a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042l3.75-3.75-1.543-1.543A.25.25 0 0 1 10.604 1Z"></path>
</svg>
</a></li>

                <li>
  <a class="HeaderMenu-dropdown-link d-block no-underline position-relative py-2 Link--secondary Link--external" target="_blank" data-analytics-event="{&quot;category&quot;:&quot;Header dropdown (logged out), Resources&quot;,&quot;action&quot;:&quot;click to go to White papers, Ebooks, Webinars&quot;,&quot;label&quot;:&quot;ref_cta:White papers, Ebooks, Webinars;&quot;}" href="https://resources.github.com/">
      White papers, Ebooks, Webinars

    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-link-external HeaderMenu-external-icon color-fg-subtle">
    <path d="M3.75 2h3.5a.75.75 0 0 1 0 1.5h-3.5a.25.25 0 0 0-.25.25v8.5c0 .138.112.25.25.25h8.5a.25.25 0 0 0 .25-.25v-3.5a.75.75 0 0 1 1.5 0v3.5A1.75 1.75 0 0 1 12.25 14h-8.5A1.75 1.75 0 0 1 2 12.25v-8.5C2 2.784 2.784 2 3.75 2Zm6.854-1h4.146a.25.25 0 0 1 .25.25v4.146a.25.25 0 0 1-.427.177L13.03 4.03 9.28 7.78a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042l3.75-3.75-1.543-1.543A.25.25 0 0 1 10.604 1Z"></path>
</svg>
</a></li>

                <li>
  <a class="HeaderMenu-dropdown-link d-block no-underline position-relative py-2 Link--secondary" data-analytics-event="{&quot;category&quot;:&quot;Header dropdown (logged out), Resources&quot;,&quot;action&quot;:&quot;click to go to Customer Stories&quot;,&quot;label&quot;:&quot;ref_cta:Customer Stories;&quot;}" href="https://github.com/customer-stories">
      Customer Stories

    
</a></li>

                <li>
  <a class="HeaderMenu-dropdown-link d-block no-underline position-relative py-2 Link--secondary Link--external" target="_blank" data-analytics-event="{&quot;category&quot;:&quot;Header dropdown (logged out), Resources&quot;,&quot;action&quot;:&quot;click to go to Partners&quot;,&quot;label&quot;:&quot;ref_cta:Partners;&quot;}" href="https://partner.github.com/">
      Partners

    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-link-external HeaderMenu-external-icon color-fg-subtle">
    <path d="M3.75 2h3.5a.75.75 0 0 1 0 1.5h-3.5a.25.25 0 0 0-.25.25v8.5c0 .138.112.25.25.25h8.5a.25.25 0 0 0 .25-.25v-3.5a.75.75 0 0 1 1.5 0v3.5A1.75 1.75 0 0 1 12.25 14h-8.5A1.75 1.75 0 0 1 2 12.25v-8.5C2 2.784 2.784 2 3.75 2Zm6.854-1h4.146a.25.25 0 0 1 .25.25v4.146a.25.25 0 0 1-.427.177L13.03 4.03 9.28 7.78a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042l3.75-3.75-1.543-1.543A.25.25 0 0 1 10.604 1Z"></path>
</svg>
</a></li>

            </ul>
          </div>
      </div>
</li>


                <li class="HeaderMenu-item position-relative flex-wrap flex-justify-between flex-items-center d-block d-lg-flex flex-lg-nowrap flex-lg-items-center js-details-container js-header-menu-item">
      <button type="button" class="HeaderMenu-link border-0 width-full width-lg-auto px-0 px-lg-2 py-lg-2 no-wrap d-flex flex-items-center flex-justify-between js-details-target" aria-expanded="false">
        Open Source
        <svg opacity="0.5" aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-chevron-down HeaderMenu-icon ml-1">
    <path d="M12.78 5.22a.749.749 0 0 1 0 1.06l-4.25 4.25a.749.749 0 0 1-1.06 0L3.22 6.28a.749.749 0 1 1 1.06-1.06L8 8.939l3.72-3.719a.749.749 0 0 1 1.06 0Z"></path>
</svg>
      </button>
      <div class="HeaderMenu-dropdown dropdown-menu rounded m-0 p-0 py-2 py-lg-4 position-relative position-lg-absolute left-0 left-lg-n3 px-lg-4">
          <div class="border-bottom pb-3 mb-3">
            <ul class="list-style-none f5">
                <li>
  <a class="HeaderMenu-dropdown-link d-block no-underline position-relative py-2 Link--secondary d-flex flex-items-center Link--has-description" data-analytics-event="{&quot;category&quot;:&quot;Header dropdown (logged out), Open Source&quot;,&quot;action&quot;:&quot;click to go to GitHub Sponsors&quot;,&quot;label&quot;:&quot;ref_cta:GitHub Sponsors;&quot;}" href="https://github.com/sponsors">
      
      <div>
        <div class="color-fg-default h4">GitHub Sponsors</div>
        Fund open source developers
      </div>

    
</a></li>

            </ul>
          </div>
          <div class="border-bottom pb-3 mb-3">
            <ul class="list-style-none f5">
                <li>
  <a class="HeaderMenu-dropdown-link d-block no-underline position-relative py-2 Link--secondary d-flex flex-items-center Link--has-description" data-analytics-event="{&quot;category&quot;:&quot;Header dropdown (logged out), Open Source&quot;,&quot;action&quot;:&quot;click to go to The ReadME Project&quot;,&quot;label&quot;:&quot;ref_cta:The ReadME Project;&quot;}" href="https://github.com/readme">
      
      <div>
        <div class="color-fg-default h4">The ReadME Project</div>
        GitHub community articles
      </div>

    
</a></li>

            </ul>
          </div>
          <div class="">
              <span class="d-block h4 color-fg-default my-1" id="open-source-repositories-heading">Repositories</span>
            <ul class="list-style-none f5" aria-labelledby="open-source-repositories-heading">
                <li>
  <a class="HeaderMenu-dropdown-link d-block no-underline position-relative py-2 Link--secondary" data-analytics-event="{&quot;category&quot;:&quot;Header dropdown (logged out), Open Source&quot;,&quot;action&quot;:&quot;click to go to Topics&quot;,&quot;label&quot;:&quot;ref_cta:Topics;&quot;}" href="https://github.com/topics">
      Topics

    
</a></li>

                <li>
  <a class="HeaderMenu-dropdown-link d-block no-underline position-relative py-2 Link--secondary" data-analytics-event="{&quot;category&quot;:&quot;Header dropdown (logged out), Open Source&quot;,&quot;action&quot;:&quot;click to go to Trending&quot;,&quot;label&quot;:&quot;ref_cta:Trending;&quot;}" href="https://github.com/trending">
      Trending

    
</a></li>

                <li>
  <a class="HeaderMenu-dropdown-link d-block no-underline position-relative py-2 Link--secondary" data-analytics-event="{&quot;category&quot;:&quot;Header dropdown (logged out), Open Source&quot;,&quot;action&quot;:&quot;click to go to Collections&quot;,&quot;label&quot;:&quot;ref_cta:Collections;&quot;}" href="https://github.com/collections">
      Collections

    
</a></li>

            </ul>
          </div>
      </div>
</li>


                <li class="HeaderMenu-item position-relative flex-wrap flex-justify-between flex-items-center d-block d-lg-flex flex-lg-nowrap flex-lg-items-center js-details-container js-header-menu-item">
      <button type="button" class="HeaderMenu-link border-0 width-full width-lg-auto px-0 px-lg-2 py-lg-2 no-wrap d-flex flex-items-center flex-justify-between js-details-target" aria-expanded="false">
        Enterprise
        <svg opacity="0.5" aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-chevron-down HeaderMenu-icon ml-1">
    <path d="M12.78 5.22a.749.749 0 0 1 0 1.06l-4.25 4.25a.749.749 0 0 1-1.06 0L3.22 6.28a.749.749 0 1 1 1.06-1.06L8 8.939l3.72-3.719a.749.749 0 0 1 1.06 0Z"></path>
</svg>
      </button>
      <div class="HeaderMenu-dropdown dropdown-menu rounded m-0 p-0 py-2 py-lg-4 position-relative position-lg-absolute left-0 left-lg-n3 px-lg-4">
          <div class="border-bottom pb-3 mb-3">
            <ul class="list-style-none f5">
                <li>
  <a class="HeaderMenu-dropdown-link d-block no-underline position-relative py-2 Link--secondary d-flex flex-items-center Link--has-description" data-analytics-event="{&quot;category&quot;:&quot;Header dropdown (logged out), Enterprise&quot;,&quot;action&quot;:&quot;click to go to Enterprise platform&quot;,&quot;label&quot;:&quot;ref_cta:Enterprise platform;&quot;}" href="https://github.com/enterprise">
      <svg aria-hidden="true" height="24" viewBox="0 0 24 24" version="1.1" width="24" data-view-component="true" class="octicon octicon-stack color-fg-subtle mr-3">
    <path d="M11.063 1.456a1.749 1.749 0 0 1 1.874 0l8.383 5.316a1.751 1.751 0 0 1 0 2.956l-8.383 5.316a1.749 1.749 0 0 1-1.874 0L2.68 9.728a1.751 1.751 0 0 1 0-2.956Zm1.071 1.267a.25.25 0 0 0-.268 0L3.483 8.039a.25.25 0 0 0 0 .422l8.383 5.316a.25.25 0 0 0 .268 0l8.383-5.316a.25.25 0 0 0 0-.422Z"></path><path d="M1.867 12.324a.75.75 0 0 1 1.035-.232l8.964 5.685a.25.25 0 0 0 .268 0l8.964-5.685a.75.75 0 0 1 .804 1.267l-8.965 5.685a1.749 1.749 0 0 1-1.874 0l-8.965-5.685a.75.75 0 0 1-.231-1.035Z"></path><path d="M1.867 16.324a.75.75 0 0 1 1.035-.232l8.964 5.685a.25.25 0 0 0 .268 0l8.964-5.685a.75.75 0 0 1 .804 1.267l-8.965 5.685a1.749 1.749 0 0 1-1.874 0l-8.965-5.685a.75.75 0 0 1-.231-1.035Z"></path>
</svg>
      <div>
        <div class="color-fg-default h4">Enterprise platform</div>
        AI-powered developer platform
      </div>

    
</a></li>

            </ul>
          </div>
          <div class="">
              <span class="d-block h4 color-fg-default my-1" id="enterprise-available-add-ons-heading">Available add-ons</span>
            <ul class="list-style-none f5" aria-labelledby="enterprise-available-add-ons-heading">
                <li>
  <a class="HeaderMenu-dropdown-link d-block no-underline position-relative py-2 Link--secondary d-flex flex-items-center Link--has-description pb-lg-3" data-analytics-event="{&quot;category&quot;:&quot;Header dropdown (logged out), Enterprise&quot;,&quot;action&quot;:&quot;click to go to Advanced Security&quot;,&quot;label&quot;:&quot;ref_cta:Advanced Security;&quot;}" href="https://github.com/enterprise/advanced-security">
      <svg aria-hidden="true" height="24" viewBox="0 0 24 24" version="1.1" width="24" data-view-component="true" class="octicon octicon-shield-check color-fg-subtle mr-3">
    <path d="M16.53 9.78a.75.75 0 0 0-1.06-1.06L11 13.19l-1.97-1.97a.75.75 0 0 0-1.06 1.06l2.5 2.5a.75.75 0 0 0 1.06 0l5-5Z"></path><path d="m12.54.637 8.25 2.675A1.75 1.75 0 0 1 22 4.976V10c0 6.19-3.771 10.704-9.401 12.83a1.704 1.704 0 0 1-1.198 0C5.77 20.705 2 16.19 2 10V4.976c0-.758.489-1.43 1.21-1.664L11.46.637a1.748 1.748 0 0 1 1.08 0Zm-.617 1.426-8.25 2.676a.249.249 0 0 0-.173.237V10c0 5.46 3.28 9.483 8.43 11.426a.199.199 0 0 0 .14 0C17.22 19.483 20.5 15.461 20.5 10V4.976a.25.25 0 0 0-.173-.237l-8.25-2.676a.253.253 0 0 0-.154 0Z"></path>
</svg>
      <div>
        <div class="color-fg-default h4">Advanced Security</div>
        Enterprise-grade security features
      </div>

    
</a></li>

                <li>
  <a class="HeaderMenu-dropdown-link d-block no-underline position-relative py-2 Link--secondary d-flex flex-items-center Link--has-description pb-lg-3" data-analytics-event="{&quot;category&quot;:&quot;Header dropdown (logged out), Enterprise&quot;,&quot;action&quot;:&quot;click to go to GitHub Copilot&quot;,&quot;label&quot;:&quot;ref_cta:GitHub Copilot;&quot;}" href="https://github.com/features/copilot#enterprise">
      <svg aria-hidden="true" height="24" viewBox="0 0 24 24" version="1.1" width="24" data-view-component="true" class="octicon octicon-copilot color-fg-subtle mr-3">
    <path d="M23.922 16.992c-.861 1.495-5.859 5.023-11.922 5.023-6.063 0-11.061-3.528-11.922-5.023A.641.641 0 0 1 0 16.736v-2.869a.841.841 0 0 1 .053-.22c.372-.935 1.347-2.292 2.605-2.656.167-.429.414-1.055.644-1.517a10.195 10.195 0 0 1-.052-1.086c0-1.331.282-2.499 1.132-3.368.397-.406.89-.717 1.474-.952 1.399-1.136 3.392-2.093 6.122-2.093 2.731 0 4.767.957 6.166 2.093.584.235 1.077.546 1.474.952.85.869 1.132 2.037 1.132 3.368 0 .368-.014.733-.052 1.086.23.462.477 1.088.644 1.517 1.258.364 2.233 1.721 2.605 2.656a.832.832 0 0 1 .053.22v2.869a.641.641 0 0 1-.078.256ZM12.172 11h-.344a4.323 4.323 0 0 1-.355.508C10.703 12.455 9.555 13 7.965 13c-1.725 0-2.989-.359-3.782-1.259a2.005 2.005 0 0 1-.085-.104L4 11.741v6.585c1.435.779 4.514 2.179 8 2.179 3.486 0 6.565-1.4 8-2.179v-6.585l-.098-.104s-.033.045-.085.104c-.793.9-2.057 1.259-3.782 1.259-1.59 0-2.738-.545-3.508-1.492a4.323 4.323 0 0 1-.355-.508h-.016.016Zm.641-2.935c.136 1.057.403 1.913.878 2.497.442.544 1.134.938 2.344.938 1.573 0 2.292-.337 2.657-.751.384-.435.558-1.15.558-2.361 0-1.14-.243-1.847-.705-2.319-.477-.488-1.319-.862-2.824-1.025-1.487-.161-2.192.138-2.533.529-.269.307-.437.808-.438 1.578v.021c0 .265.021.562.063.893Zm-1.626 0c.042-.331.063-.628.063-.894v-.02c-.001-.77-.169-1.271-.438-1.578-.341-.391-1.046-.69-2.533-.529-1.505.163-2.347.537-2.824 1.025-.462.472-.705 1.179-.705 2.319 0 1.211.175 1.926.558 2.361.365.414 1.084.751 2.657.751 1.21 0 1.902-.394 2.344-.938.475-.584.742-1.44.878-2.497Z"></path><path d="M14.5 14.25a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0v-2a1 1 0 0 1 1-1Zm-5 0a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0v-2a1 1 0 0 1 1-1Z"></path>
</svg>
      <div>
        <div class="color-fg-default h4">GitHub Copilot</div>
        Enterprise-grade AI features
      </div>

    
</a></li>

                <li>
  <a class="HeaderMenu-dropdown-link d-block no-underline position-relative py-2 Link--secondary d-flex flex-items-center Link--has-description" data-analytics-event="{&quot;category&quot;:&quot;Header dropdown (logged out), Enterprise&quot;,&quot;action&quot;:&quot;click to go to Premium Support&quot;,&quot;label&quot;:&quot;ref_cta:Premium Support;&quot;}" href="https://github.com/premium-support">
      <svg aria-hidden="true" height="24" viewBox="0 0 24 24" version="1.1" width="24" data-view-component="true" class="octicon octicon-comment-discussion color-fg-subtle mr-3">
    <path d="M1.75 1h12.5c.966 0 1.75.784 1.75 1.75v9.5A1.75 1.75 0 0 1 14.25 14H8.061l-2.574 2.573A1.458 1.458 0 0 1 3 15.543V14H1.75A1.75 1.75 0 0 1 0 12.25v-9.5C0 1.784.784 1 1.75 1ZM1.5 2.75v9.5c0 .138.112.25.25.25h2a.75.75 0 0 1 .75.75v2.19l2.72-2.72a.749.749 0 0 1 .53-.22h6.5a.25.25 0 0 0 .25-.25v-9.5a.25.25 0 0 0-.25-.25H1.75a.25.25 0 0 0-.25.25Z"></path><path d="M22.5 8.75a.25.25 0 0 0-.25-.25h-3.5a.75.75 0 0 1 0-1.5h3.5c.966 0 1.75.784 1.75 1.75v9.5A1.75 1.75 0 0 1 22.25 20H21v1.543a1.457 1.457 0 0 1-2.487 1.03L15.939 20H10.75A1.75 1.75 0 0 1 9 18.25v-1.465a.75.75 0 0 1 1.5 0v1.465c0 .138.112.25.25.25h5.5a.75.75 0 0 1 .53.22l2.72 2.72v-2.19a.75.75 0 0 1 .75-.75h2a.25.25 0 0 0 .25-.25v-9.5Z"></path>
</svg>
      <div>
        <div class="color-fg-default h4">Premium Support</div>
        Enterprise-grade 24/7 support
      </div>

    
</a></li>

            </ul>
          </div>
      </div>
</li>


                <li class="HeaderMenu-item position-relative flex-wrap flex-justify-between flex-items-center d-block d-lg-flex flex-lg-nowrap flex-lg-items-center js-details-container js-header-menu-item">
    <a class="HeaderMenu-link no-underline px-0 px-lg-2 py-3 py-lg-2 d-block d-lg-inline-block" data-analytics-event="{&quot;category&quot;:&quot;Header menu top item (logged out)&quot;,&quot;action&quot;:&quot;click to go to Pricing&quot;,&quot;label&quot;:&quot;ref_cta:Pricing;&quot;}" href="https://github.com/pricing">Pricing</a>
</li>

            </ul>
          </nav>

        <div class="d-flex flex-column flex-lg-row width-full flex-justify-end flex-lg-items-center text-center mt-3 mt-lg-0 text-lg-left ml-lg-3">
                


<qbsearch-input class="search-input" data-scope="repo:sayansarkar2001/weather_app" data-custom-scopes-path="/search/custom_scopes" data-delete-custom-scopes-csrf="8CwDUUp_fQTjiXbDEg5jLlqnNqueN2LuCYS8ErhS6zeNuMs1kPicQD5RD17dBf3JA_1eG0nEdWs6mNUAoRGoIg" data-max-custom-scopes="10" data-header-redesign-enabled="false" data-initial-value="" data-blackbird-suggestions-path="/search/suggestions" data-jump-to-suggestions-path="/_graphql/GetSuggestedNavigationDestinations" data-current-repository="sayansarkar2001/weather_app" data-current-org="" data-current-owner="sayansarkar2001" data-logged-in="false" data-copilot-chat-enabled="false" data-nl-search-enabled="false" data-catalyst="">
  <div class="search-input-container search-with-dialog position-relative d-flex flex-row flex-items-center mr-4 rounded" data-action="click:qbsearch-input#searchInputContainerClicked">
      <button type="button" class="header-search-button placeholder input-button form-control d-flex flex-1 flex-self-stretch flex-items-center no-wrap width-full py-0 pl-2 pr-0 text-left border-0 box-shadow-none" data-target="qbsearch-input.inputButton" aria-label="Search or jump to…" aria-haspopup="dialog" placeholder="Search or jump to..." data-hotkey="s,/" autocapitalize="off" data-action="click:qbsearch-input#handleExpand">
        <div class="mr-2 color-fg-muted">
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-search">
    <path d="M10.68 11.74a6 6 0 0 1-7.922-8.982 6 6 0 0 1 8.982 7.922l3.04 3.04a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215ZM11.5 7a4.499 4.499 0 1 0-8.997 0A4.499 4.499 0 0 0 11.5 7Z"></path>
</svg>
        </div>
        <span class="flex-1" data-target="qbsearch-input.inputButtonText">Search or jump to...</span>
          <div class="d-flex" data-target="qbsearch-input.hotkeyIndicator">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="20" aria-hidden="true" class="mr-1"><path fill="none" stroke="#979A9C" opacity=".4" d="M3.5.5h12c1.7 0 3 1.3 3 3v13c0 1.7-1.3 3-3 3h-12c-1.7 0-3-1.3-3-3v-13c0-1.7 1.3-3 3-3z"></path><path fill="#979A9C" d="M11.8 6L8 15.1h-.9L10.8 6h1z"></path></svg>

          </div>
      </button>

    <input type="hidden" name="type" class="js-site-search-type-field">

    
<div class="Overlay--hidden " data-modal-dialog-overlay="">
  <modal-dialog data-action="close:qbsearch-input#handleClose cancel:qbsearch-input#handleClose" data-target="qbsearch-input.searchSuggestionsDialog" role="dialog" id="search-suggestions-dialog" aria-modal="true" aria-labelledby="search-suggestions-dialog-header" data-view-component="true" class="Overlay Overlay--width-large Overlay--height-auto">
      <h1 id="search-suggestions-dialog-header" class="sr-only">Search code, repositories, users, issues, pull requests...</h1>
    <div class="Overlay-body Overlay-body--paddingNone">
      
          <div data-view-component="true">        <div class="search-suggestions position-fixed width-full color-shadow-large border color-fg-default color-bg-default overflow-hidden d-flex flex-column query-builder-container" style="border-radius: 12px;" data-target="qbsearch-input.queryBuilderContainer" hidden="">
          <!-- '"` --><!-- </textarea></xmp> --><form id="query-builder-test-form" action="https://github.com/sayansarkar2001/weather_app/blob/main/src/currentLocation.js" accept-charset="UTF-8" method="get">
  <query-builder data-target="qbsearch-input.queryBuilder" id="query-builder-query-builder-test" data-filter-key=":" data-view-component="true" class="QueryBuilder search-query-builder" data-min-width="300" data-catalyst="">
    <div class="FormControl FormControl--fullWidth">
      <label id="query-builder-test-label" for="query-builder-test" class="FormControl-label sr-only">
        Search
      </label>
      <div class="QueryBuilder-StyledInput width-fit " data-target="query-builder.styledInput">
          <span id="query-builder-test-leadingvisual-wrap" class="FormControl-input-leadingVisualWrap QueryBuilder-leadingVisualWrap">
            <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-search FormControl-input-leadingVisual">
    <path d="M10.68 11.74a6 6 0 0 1-7.922-8.982 6 6 0 0 1 8.982 7.922l3.04 3.04a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215ZM11.5 7a4.499 4.499 0 1 0-8.997 0A4.499 4.499 0 0 0 11.5 7Z"></path>
</svg>
          </span>
        <div data-target="query-builder.styledInputContainer" class="QueryBuilder-StyledInputContainer">
          <div aria-hidden="true" class="QueryBuilder-StyledInputContent" data-target="query-builder.styledInputContent"></div>
          <div class="QueryBuilder-InputWrapper">
            <div aria-hidden="true" class="QueryBuilder-Sizer" data-target="query-builder.sizer"><span></span></div>
            <input id="query-builder-test" name="query-builder-test" value="" autocomplete="off" type="text" role="combobox" spellcheck="false" aria-expanded="false" aria-describedby="validation-3441f444-2ced-46c0-a4fb-d34fd0f1a0cd" data-target="query-builder.input" data-action="
          input:query-builder#inputChange
          blur:query-builder#inputBlur
          keydown:query-builder#inputKeydown
          focus:query-builder#inputFocus
        " data-view-component="true" class="FormControl-input QueryBuilder-Input FormControl-medium" aria-controls="query-builder-test-results" aria-autocomplete="list" aria-haspopup="listbox" style="width: 300px;">
          </div>
        </div>
          <span class="sr-only" id="query-builder-test-clear">Clear</span>
          <button role="button" id="query-builder-test-clear-button" aria-labelledby="query-builder-test-clear query-builder-test-label" data-target="query-builder.clearButton" data-action="
                click:query-builder#clear
                focus:query-builder#clearButtonFocus
                blur:query-builder#clearButtonBlur
              " variant="small" hidden="" type="button" data-view-component="true" class="Button Button--iconOnly Button--invisible Button--medium mr-1 px-2 py-0 d-flex flex-items-center rounded-1 color-fg-muted">  <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-x-circle-fill Button-visual">
    <path d="M2.343 13.657A8 8 0 1 1 13.658 2.343 8 8 0 0 1 2.343 13.657ZM6.03 4.97a.751.751 0 0 0-1.042.018.751.751 0 0 0-.018 1.042L6.94 8 4.97 9.97a.749.749 0 0 0 .326 1.275.749.749 0 0 0 .734-.215L8 9.06l1.97 1.97a.749.749 0 0 0 1.275-.326.749.749 0 0 0-.215-.734L9.06 8l1.97-1.97a.749.749 0 0 0-.326-1.275.749.749 0 0 0-.734.215L8 6.94Z"></path>
</svg>
</button>

      </div>
      <template id="search-icon"></template>

<template id="code-icon"></template>

<template id="file-code-icon"></template>

<template id="history-icon"></template>

<template id="repo-icon"></template>

<template id="bookmark-icon"></template>

<template id="plus-circle-icon"></template>

<template id="circle-icon"></template>

<template id="trash-icon"></template>

<template id="team-icon"></template>

<template id="project-icon"></template>

<template id="pencil-icon"></template>

<template id="copilot-icon"></template>

<template id="copilot-error-icon"></template>

<template id="workflow-icon"></template>

<template id="book-icon"></template>

<template id="code-review-icon"></template>

<template id="codespaces-icon"></template>

<template id="comment-icon"></template>

<template id="comment-discussion-icon"></template>

<template id="organization-icon"></template>

<template id="rocket-icon"></template>

<template id="shield-check-icon"></template>

<template id="heart-icon"></template>

<template id="server-icon"></template>

<template id="globe-icon"></template>

<template id="issue-opened-icon"></template>

<template id="device-mobile-icon"></template>

<template id="package-icon"></template>

<template id="credit-card-icon"></template>

<template id="play-icon"></template>

<template id="gift-icon"></template>

<template id="code-square-icon"></template>

<template id="device-desktop-icon"></template>

        <div class="position-relative">
                <ul role="listbox" class="ActionListWrap QueryBuilder-ListWrap" aria-label="Suggestions" data-action="
                    combobox-commit:query-builder#comboboxCommit
                    mousedown:query-builder#resultsMousedown
                  " data-target="query-builder.resultsList" data-persist-list="false" id="query-builder-test-results"></ul>
        </div>
      <div class="FormControl-inlineValidation" id="validation-3441f444-2ced-46c0-a4fb-d34fd0f1a0cd" hidden="hidden">
        <span class="FormControl-inlineValidation--visual">
          <svg aria-hidden="true" height="12" viewBox="0 0 12 12" version="1.1" width="12" data-view-component="true" class="octicon octicon-alert-fill">
    <path d="M4.855.708c.5-.896 1.79-.896 2.29 0l4.675 8.351a1.312 1.312 0 0 1-1.146 1.954H1.33A1.313 1.313 0 0 1 .183 9.058ZM7 7V3H5v4Zm-1 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"></path>
</svg>
        </span>
        <span></span>
</div>    </div>
    <div data-target="query-builder.screenReaderFeedback" aria-live="polite" aria-atomic="true" class="sr-only"></div>
</query-builder></form>
          <div class="d-flex flex-row color-fg-muted px-3 text-small color-bg-default search-feedback-prompt">
            <a target="_blank" href="https://docs.github.com/search-github/github-code-search/understanding-github-code-search-syntax" data-view-component="true" class="Link color-fg-accent text-normal ml-2">
              Search syntax tips
</a>            <div class="d-flex flex-1"></div>
          </div>
        </div>
</div>

    </div>
</modal-dialog></div>
  </div>
  <div data-action="click:qbsearch-input#retract" class="dark-backdrop position-fixed" hidden="" data-target="qbsearch-input.darkBackdrop"></div>
  <div class="color-fg-default">
    
<dialog-helper>
  <dialog data-target="qbsearch-input.feedbackDialog" data-action="close:qbsearch-input#handleDialogClose cancel:qbsearch-input#handleDialogClose" id="feedback-dialog" aria-modal="true" aria-labelledby="feedback-dialog-title" aria-describedby="feedback-dialog-description" data-view-component="true" class="Overlay Overlay-whenNarrow Overlay--size-medium Overlay--motion-scaleFade">
    <div data-view-component="true" class="Overlay-header">
  <div class="Overlay-headerContentWrap">
    <div class="Overlay-titleWrap">
      <h1 class="Overlay-title " id="feedback-dialog-title">
        Provide feedback
      </h1>
        
    </div>
    <div class="Overlay-actionWrap">
      <button data-close-dialog-id="feedback-dialog" aria-label="Close" type="button" data-view-component="true" class="close-button Overlay-closeButton"><svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-x">
    <path d="M3.72 3.72a.75.75 0 0 1 1.06 0L8 6.94l3.22-3.22a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L9.06 8l3.22 3.22a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L8 9.06l-3.22 3.22a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L6.94 8 3.72 4.78a.75.75 0 0 1 0-1.06Z"></path>
</svg></button>
    </div>
  </div>
  
</div>
      <scrollable-region data-labelled-by="feedback-dialog-title" data-catalyst="" style="overflow: auto;">
        <div data-view-component="true" class="Overlay-body">        <!-- '"` --><!-- </textarea></xmp> --><form id="code-search-feedback-form" data-turbo="false" action="https://github.com/search/feedback" accept-charset="UTF-8" method="post"><input type="hidden" data-csrf="true" name="authenticity_token" value="6WxFX0NPdPiIdOOCunTawtKmhJbD7fckbcWnfwTMCd4n66kkYZFKV1dZoJ2gBHHT6vgtUnoXVGFmDzCdbmam+Q==">
          <p>We read every piece of feedback, and take your input very seriously.</p>
          <textarea name="feedback" class="form-control width-full mb-2" style="height: 120px" id="feedback"></textarea>
          <input name="include_email" id="include_email" aria-label="Include my email address so I can be contacted" class="form-control mr-2" type="checkbox">
          <label for="include_email" style="font-weight: normal">Include my email address so I can be contacted</label>
</form></div>
      </scrollable-region>
      <div data-view-component="true" class="Overlay-footer Overlay-footer--alignEnd">          <button data-close-dialog-id="feedback-dialog" type="button" data-view-component="true" class="btn">    Cancel
</button>
          <button form="code-search-feedback-form" data-action="click:qbsearch-input#submitFeedback" type="submit" data-view-component="true" class="btn-primary btn">    Submit feedback
</button>
</div>
</dialog></dialog-helper>

    <custom-scopes data-target="qbsearch-input.customScopesManager" data-catalyst="">
    
<dialog-helper>
  <dialog data-target="custom-scopes.customScopesModalDialog" data-action="close:qbsearch-input#handleDialogClose cancel:qbsearch-input#handleDialogClose" id="custom-scopes-dialog" aria-modal="true" aria-labelledby="custom-scopes-dialog-title" aria-describedby="custom-scopes-dialog-description" data-view-component="true" class="Overlay Overlay-whenNarrow Overlay--size-medium Overlay--motion-scaleFade">
    <div data-view-component="true" class="Overlay-header Overlay-header--divided">
  <div class="Overlay-headerContentWrap">
    <div class="Overlay-titleWrap">
      <h1 class="Overlay-title " id="custom-scopes-dialog-title">
        Saved searches
      </h1>
        <h2 id="custom-scopes-dialog-description" class="Overlay-description">Use saved searches to filter your results more quickly</h2>
    </div>
    <div class="Overlay-actionWrap">
      <button data-close-dialog-id="custom-scopes-dialog" aria-label="Close" type="button" data-view-component="true" class="close-button Overlay-closeButton"><svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-x">
    <path d="M3.72 3.72a.75.75 0 0 1 1.06 0L8 6.94l3.22-3.22a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L9.06 8l3.22 3.22a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L8 9.06l-3.22 3.22a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L6.94 8 3.72 4.78a.75.75 0 0 1 0-1.06Z"></path>
</svg></button>
    </div>
  </div>
  
</div>
      <scrollable-region data-labelled-by="custom-scopes-dialog-title" data-catalyst="" style="overflow: auto;">
        <div data-view-component="true" class="Overlay-body">        <div data-target="custom-scopes.customScopesModalDialogFlash"></div>

        <div hidden="" class="create-custom-scope-form" data-target="custom-scopes.createCustomScopeForm">
        <!-- '"` --><!-- </textarea></xmp> --><form id="custom-scopes-dialog-form" data-turbo="false" action="https://github.com/search/custom_scopes" accept-charset="UTF-8" method="post"><input type="hidden" data-csrf="true" name="authenticity_token" value="NmtLfS2w3FQvH2s/xQGxFfpZhqrSd12GBaI4W3asLkw59mllczRnH/NAoG295I+P7tfm0O30bZTN1fLM0g8/qw==">
          <div data-target="custom-scopes.customScopesModalDialogFlash"></div>

          <input type="hidden" id="custom_scope_id" name="custom_scope_id" data-target="custom-scopes.customScopesIdField">

          <div class="form-group">
            <label for="custom_scope_name">Name</label>
            <auto-check src="/search/custom_scopes/check_name" required="">
              <input type="text" name="custom_scope_name" id="custom_scope_name" data-target="custom-scopes.customScopesNameField" class="form-control" autocomplete="off" placeholder="github-ruby" required="" maxlength="50" spellcheck="false">
              <input type="hidden" data-csrf="true" value="0Ox13vI+buDgh7TclfnceUexn7SfW3AleqN4wCu7nL/UpFXHo05geyPae5EZOsBt64hk7aJ6c2aNOmA7RI3Ejg==">
            </auto-check>
          </div>

          <div class="form-group">
            <label for="custom_scope_query">Query</label>
            <input type="text" name="custom_scope_query" id="custom_scope_query" data-target="custom-scopes.customScopesQueryField" class="form-control" autocomplete="off" placeholder="(repo:mona/a OR repo:mona/b) AND lang:python" required="" maxlength="500">
          </div>

          <p class="text-small color-fg-muted">
            To see all available qualifiers, see our <a class="Link--inTextBlock" href="https://docs.github.com/search-github/github-code-search/understanding-github-code-search-syntax">documentation</a>.
          </p>
</form>        </div>

        <div data-target="custom-scopes.manageCustomScopesForm">
          <div data-target="custom-scopes.list"></div>
        </div>

</div>
      </scrollable-region>
      <div data-view-component="true" class="Overlay-footer Overlay-footer--alignEnd Overlay-footer--divided">          <button data-action="click:custom-scopes#customScopesCancel" type="button" data-view-component="true" class="btn">    Cancel
</button>
          <button form="custom-scopes-dialog-form" data-action="click:custom-scopes#customScopesSubmit" data-target="custom-scopes.customScopesSubmitButton" type="submit" data-view-component="true" class="btn-primary btn">    Create saved search
</button>
</div>
</dialog></dialog-helper>
    </custom-scopes>
  </div>
</qbsearch-input><input type="hidden" data-csrf="true" class="js-data-jump-to-suggestions-path-csrf" value="/TdCKCrorepauY9Pr0LFhDO0qoQODNApiuNBeXfXospBIISu3RN6QITUUOu6z6+6JKlanXR4q5qBzLEgtEAp+A==">


            <div class="position-relative HeaderMenu-link-wrap d-lg-inline-block">
              <a href="https://github.com/login?return_to=https%3A%2F%2Fgithub.com%2Fsayansarkar2001%2Fweather_app%2Fblob%2Fmain%2Fsrc%2FApp.test.js" class="HeaderMenu-link HeaderMenu-link--sign-in HeaderMenu-button flex-shrink-0 no-underline d-none d-lg-inline-flex border border-lg-0 rounded rounded-lg-0 px-2 py-1" style="margin-left: 12px;" data-hydro-click="{&quot;event_type&quot;:&quot;authentication.click&quot;,&quot;payload&quot;:{&quot;location_in_page&quot;:&quot;site header menu&quot;,&quot;repository_id&quot;:null,&quot;auth_type&quot;:&quot;SIGN_UP&quot;,&quot;originating_url&quot;:&quot;https://github.com/sayansarkar2001/weather_app/blob/main/src/App.test.js&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="1f751fe2d9455d595509c6d96eaa6b10d72baeb6aacd1a6c7d25de5e2c75dd23" data-analytics-event="{&quot;category&quot;:&quot;Marketing nav&quot;,&quot;action&quot;:&quot;click to go to homepage&quot;,&quot;label&quot;:&quot;ref_page:Marketing;ref_cta:Sign in;ref_loc:Header&quot;}">
                Sign in
              </a>
            </div>

              <a href="https://github.com/signup?ref_cta=Sign+up&amp;ref_loc=header+logged+out&amp;ref_page=%2F%3Cuser-name%3E%2F%3Crepo-name%3E%2Fblob%2Fshow&amp;source=header-repo&amp;source_repo=sayansarkar2001%2Fweather_app" class="HeaderMenu-link HeaderMenu-link--sign-up HeaderMenu-button flex-shrink-0 d-flex d-lg-inline-flex no-underline border color-border-default rounded px-2 py-1" data-hydro-click="{&quot;event_type&quot;:&quot;authentication.click&quot;,&quot;payload&quot;:{&quot;location_in_page&quot;:&quot;site header menu&quot;,&quot;repository_id&quot;:null,&quot;auth_type&quot;:&quot;SIGN_UP&quot;,&quot;originating_url&quot;:&quot;https://github.com/sayansarkar2001/weather_app/blob/main/src/App.test.js&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="1f751fe2d9455d595509c6d96eaa6b10d72baeb6aacd1a6c7d25de5e2c75dd23" data-analytics-event="{&quot;category&quot;:&quot;Sign up&quot;,&quot;action&quot;:&quot;click to sign up for account&quot;,&quot;label&quot;:&quot;ref_page:/&lt;user-name&gt;/&lt;repo-name&gt;/blob/show;ref_cta:Sign up;ref_loc:header logged out&quot;}">
                Sign up
              </a>
        </div>
      </div>
    </div>
  </div>
</header>

      <div hidden="hidden" data-view-component="true" class="js-stale-session-flash stale-session-flash flash flash-warn flash-full mb-3">
  
        <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-alert">
    <path d="M6.457 1.047c.659-1.234 2.427-1.234 3.086 0l6.082 11.378A1.75 1.75 0 0 1 14.082 15H1.918a1.75 1.75 0 0 1-1.543-2.575Zm1.763.707a.25.25 0 0 0-.44 0L1.698 13.132a.25.25 0 0 0 .22.368h12.164a.25.25 0 0 0 .22-.368Zm.53 3.996v2.5a.75.75 0 0 1-1.5 0v-2.5a.75.75 0 0 1 1.5 0ZM9 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"></path>
</svg>
        <span class="js-stale-session-flash-signed-in" hidden="">You signed in with another tab or window. <a class="Link--inTextBlock" href="https://github.com/sayansarkar2001/weather_app/blob/main/src/currentLocation.js">Reload</a> to refresh your session.</span>
        <span class="js-stale-session-flash-signed-out" hidden="">You signed out in another tab or window. <a class="Link--inTextBlock" href="https://github.com/sayansarkar2001/weather_app/blob/main/src/currentLocation.js">Reload</a> to refresh your session.</span>
        <span class="js-stale-session-flash-switched" hidden="">You switched accounts on another tab or window. <a class="Link--inTextBlock" href="https://github.com/sayansarkar2001/weather_app/blob/main/src/currentLocation.js">Reload</a> to refresh your session.</span>

    <button id="icon-button-201a1864-6a00-49c4-9654-c811678662ca" aria-labelledby="tooltip-f37ff5b6-889e-4b2c-b06a-e2ebc0b62fe3" type="button" data-view-component="true" class="Button Button--iconOnly Button--invisible Button--medium flash-close js-flash-close">  <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-x Button-visual">
    <path d="M3.72 3.72a.75.75 0 0 1 1.06 0L8 6.94l3.22-3.22a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L9.06 8l3.22 3.22a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L8 9.06l-3.22 3.22a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L6.94 8 3.72 4.78a.75.75 0 0 1 0-1.06Z"></path>
</svg>
</button><tool-tip id="tooltip-f37ff5b6-889e-4b2c-b06a-e2ebc0b62fe3" for="icon-button-201a1864-6a00-49c4-9654-c811678662ca" popover="manual" data-direction="s" data-type="label" data-view-component="true" class="sr-only position-absolute" aria-hidden="true" role="tooltip"><template shadowrootmode="open"><style>
      :host {
        --tooltip-top: var(--tool-tip-position-top, 0);
        --tooltip-left: var(--tool-tip-position-left, 0);
        padding: var(--overlay-paddingBlock-condensed) var(--overlay-padding-condensed) !important;
        font: var(--text-body-shorthand-small);
        color: var(--fgColor-onEmphasis, var(--color-fg-on-emphasis)) !important;
        text-align: center;
        text-decoration: none;
        text-shadow: none;
        text-transform: none;
        letter-spacing: normal;
        word-wrap: break-word;
        white-space: pre;
        background: var(--bgColor-emphasis, var(--color-neutral-emphasis-plus)) !important;
        border-radius: var(--borderRadius-medium);
        border: 0 !important;
        opacity: 0;
        max-width: var(--overlay-width-small);
        word-wrap: break-word;
        white-space: normal;
        width: max-content !important;
        inset: var(--tooltip-top) auto auto var(--tooltip-left) !important;
        overflow: visible !important;
        text-wrap: balance;
      }

      :host(:is(.tooltip-n, .tooltip-nw, .tooltip-ne)) {
        --tooltip-top: calc(var(--tool-tip-position-top, 0) - var(--overlay-offset, 0.25rem));
        --tooltip-left: var(--tool-tip-position-left);
      }

      :host(:is(.tooltip-s, .tooltip-sw, .tooltip-se)) {
        --tooltip-top: calc(var(--tool-tip-position-top, 0) + var(--overlay-offset, 0.25rem));
        --tooltip-left: var(--tool-tip-position-left);
      }

      :host(.tooltip-w) {
        --tooltip-top: var(--tool-tip-position-top);
        --tooltip-left: calc(var(--tool-tip-position-left, 0) - var(--overlay-offset, 0.25rem));
      }

      :host(.tooltip-e) {
        --tooltip-top: var(--tool-tip-position-top);
        --tooltip-left: calc(var(--tool-tip-position-left, 0) + var(--overlay-offset, 0.25rem));
      }

      :host:after{
        position: absolute;
        display: block;
        right: 0;
        left: 0;
        height: var(--overlay-offset, 0.25rem);
        content: "";
      }

      :host(.tooltip-s):after,
      :host(.tooltip-se):after,
      :host(.tooltip-sw):after {
        bottom: 100%
      }

      :host(.tooltip-n):after,
      :host(.tooltip-ne):after,
      :host(.tooltip-nw):after {
        top: 100%;
      }

      @keyframes tooltip-appear {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }

      :host(:popover-open),
      :host(:popover-open):before {
        animation-name: tooltip-appear;
        animation-duration: .1s;
        animation-fill-mode: forwards;
        animation-timing-function: ease-in;
      }

      :host(.\:popover-open) {
        animation-name: tooltip-appear;
        animation-duration: .1s;
        animation-fill-mode: forwards;
        animation-timing-function: ease-in;
      }

      @media (forced-colors: active) {
        :host {
          outline: solid 1px transparent;
        }

        :host:before {
          display: none;
        }
      }
    </style><slot></slot></template>Dismiss alert</tool-tip>


  
</div>
    </div>

  <div id="start-of-content" class="show-on-focus"></div>








    <div id="js-flash-container" class="flash-container" data-turbo-replace="">




  <template class="js-flash-template"></template>
</div>


    
    <include-fragment class="js-notification-shelf-include-fragment" data-base-src="https://github.com/notifications/beta/shelf"><template shadowrootmode="open"><style>:host {display: block;}</style><slot></slot></template></include-fragment>





  <div class="application-main " data-commit-hovercards-enabled="" data-discussion-hovercards-enabled="" data-issue-and-pr-hovercards-enabled="">
        <div itemscope="" itemtype="http://schema.org/SoftwareSourceCode" class="">
    <main id="js-repo-pjax-container">
      
      






  
  <div id="repository-container-header" class="pt-3 hide-full-screen" style="background-color: var(--page-header-bgColor, var(--color-page-header-bg));" data-turbo-replace="">

      <div class="d-flex flex-nowrap flex-justify-end mb-3  px-3 px-lg-5" style="gap: 1rem;">

        <div class="flex-auto min-width-0 width-fit">
            
  <div class=" d-flex flex-wrap flex-items-center wb-break-word f3 text-normal">
      <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-repo color-fg-muted mr-2">
    <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z"></path>
</svg>
    
    <span class="author flex-self-stretch" itemprop="author">
      <a class="url fn" rel="author" data-hovercard-type="user" data-hovercard-url="/users/sayansarkar2001/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="https://github.com/sayansarkar2001">
        sayansarkar2001
</a>    </span>
    <span class="mx-1 flex-self-stretch color-fg-muted">/</span>
    <strong itemprop="name" class="mr-2 flex-self-stretch">
      <a data-pjax="#repo-content-pjax-container" data-turbo-frame="repo-content-turbo-frame" href="https://github.com/sayansarkar2001/weather_app">weather_app</a>
    </strong>

    <span></span><span class="Label Label--secondary v-align-middle mr-1">Public</span>
  </div>


        </div>

        <div id="repository-details-container" class="flex-shrink-0" data-turbo-replace="" style="max-width: 70%;">
            <ul class="pagehead-actions flex-shrink-0 d-none d-md-inline" style="padding: 2px 0;">
    
      

  <li>
            <a href="https://github.com/login?return_to=%2Fsayansarkar2001%2Fweather_app" rel="nofollow" id="repository-details-watch-button" data-hydro-click="{&quot;event_type&quot;:&quot;authentication.click&quot;,&quot;payload&quot;:{&quot;location_in_page&quot;:&quot;notification subscription menu watch&quot;,&quot;repository_id&quot;:null,&quot;auth_type&quot;:&quot;LOG_IN&quot;,&quot;originating_url&quot;:&quot;https://github.com/sayansarkar2001/weather_app/blob/main/src/App.test.js&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="9d063c6af18618ea7b4e40836190876bd58900cde56794d585e7d7db4e74f4a3" aria-label="You must be signed in to change notification settings" data-view-component="true" class="btn-sm btn" aria-describedby="tooltip-83773f60-0421-4d6d-826f-041d5120aeb7">    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-bell mr-2">
    <path d="M8 16a2 2 0 0 0 1.985-1.75c.017-.137-.097-.25-.235-.25h-3.5c-.138 0-.252.113-.235.25A2 2 0 0 0 8 16ZM3 5a5 5 0 0 1 10 0v2.947c0 .05.015.098.042.139l1.703 2.555A1.519 1.519 0 0 1 13.482 13H2.518a1.516 1.516 0 0 1-1.263-2.36l1.703-2.554A.255.255 0 0 0 3 7.947Zm5-3.5A3.5 3.5 0 0 0 4.5 5v2.947c0 .346-.102.683-.294.97l-1.703 2.556a.017.017 0 0 0-.003.01l.001.006c0 .002.002.004.004.006l.006.004.007.001h10.964l.007-.001.006-.004.004-.006.001-.007a.017.017 0 0 0-.003-.01l-1.703-2.554a1.745 1.745 0 0 1-.294-.97V5A3.5 3.5 0 0 0 8 1.5Z"></path>
</svg>Notifications
</a>    <tool-tip id="tooltip-83773f60-0421-4d6d-826f-041d5120aeb7" for="repository-details-watch-button" popover="manual" data-direction="s" data-type="description" data-view-component="true" class="sr-only position-absolute" role="tooltip"><template shadowrootmode="open"><style>
      :host {
        --tooltip-top: var(--tool-tip-position-top, 0);
        --tooltip-left: var(--tool-tip-position-left, 0);
        padding: var(--overlay-paddingBlock-condensed) var(--overlay-padding-condensed) !important;
        font: var(--text-body-shorthand-small);
        color: var(--fgColor-onEmphasis, var(--color-fg-on-emphasis)) !important;
        text-align: center;
        text-decoration: none;
        text-shadow: none;
        text-transform: none;
        letter-spacing: normal;
        word-wrap: break-word;
        white-space: pre;
        background: var(--bgColor-emphasis, var(--color-neutral-emphasis-plus)) !important;
        border-radius: var(--borderRadius-medium);
        border: 0 !important;
        opacity: 0;
        max-width: var(--overlay-width-small);
        word-wrap: break-word;
        white-space: normal;
        width: max-content !important;
        inset: var(--tooltip-top) auto auto var(--tooltip-left) !important;
        overflow: visible !important;
        text-wrap: balance;
      }

      :host(:is(.tooltip-n, .tooltip-nw, .tooltip-ne)) {
        --tooltip-top: calc(var(--tool-tip-position-top, 0) - var(--overlay-offset, 0.25rem));
        --tooltip-left: var(--tool-tip-position-left);
      }

      :host(:is(.tooltip-s, .tooltip-sw, .tooltip-se)) {
        --tooltip-top: calc(var(--tool-tip-position-top, 0) + var(--overlay-offset, 0.25rem));
        --tooltip-left: var(--tool-tip-position-left);
      }

      :host(.tooltip-w) {
        --tooltip-top: var(--tool-tip-position-top);
        --tooltip-left: calc(var(--tool-tip-position-left, 0) - var(--overlay-offset, 0.25rem));
      }

      :host(.tooltip-e) {
        --tooltip-top: var(--tool-tip-position-top);
        --tooltip-left: calc(var(--tool-tip-position-left, 0) + var(--overlay-offset, 0.25rem));
      }

      :host:after{
        position: absolute;
        display: block;
        right: 0;
        left: 0;
        height: var(--overlay-offset, 0.25rem);
        content: "";
      }

      :host(.tooltip-s):after,
      :host(.tooltip-se):after,
      :host(.tooltip-sw):after {
        bottom: 100%
      }

      :host(.tooltip-n):after,
      :host(.tooltip-ne):after,
      :host(.tooltip-nw):after {
        top: 100%;
      }

      @keyframes tooltip-appear {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }

      :host(:popover-open),
      :host(:popover-open):before {
        animation-name: tooltip-appear;
        animation-duration: .1s;
        animation-fill-mode: forwards;
        animation-timing-function: ease-in;
      }

      :host(.\:popover-open) {
        animation-name: tooltip-appear;
        animation-duration: .1s;
        animation-fill-mode: forwards;
        animation-timing-function: ease-in;
      }

      @media (forced-colors: active) {
        :host {
          outline: solid 1px transparent;
        }

        :host:before {
          display: none;
        }
      }
    </style><slot></slot></template>You must be signed in to change notification settings</tool-tip>

    </li>

  <li>
          <a icon="repo-forked" id="fork-button" href="https://github.com/login?return_to=%2Fsayansarkar2001%2Fweather_app" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;authentication.click&quot;,&quot;payload&quot;:{&quot;location_in_page&quot;:&quot;repo details fork button&quot;,&quot;repository_id&quot;:748052548,&quot;auth_type&quot;:&quot;LOG_IN&quot;,&quot;originating_url&quot;:&quot;https://github.com/sayansarkar2001/weather_app/blob/main/src/App.test.js&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="d4908ac2860b25facdd323128487179cc894fee2fd767664897af556fd20c228" data-view-component="true" class="btn-sm btn">    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-repo-forked mr-2">
    <path d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.878a2.25 2.25 0 1 1 1.5 0v.878a2.25 2.25 0 0 1-2.25 2.25h-1.5v2.128a2.251 2.251 0 1 1-1.5 0V8.5h-1.5A2.25 2.25 0 0 1 3.5 6.25v-.878a2.25 2.25 0 1 1 1.5 0ZM5 3.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm6.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-3 8.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z"></path>
</svg>Fork
    <span id="repo-network-counter" data-pjax-replace="true" data-turbo-replace="true" title="0" data-view-component="true" class="Counter">0</span>
</a>
  </li>

  <li>
        <div data-view-component="true" class="BtnGroup d-flex">
        <a href="https://github.com/login?return_to=%2Fsayansarkar2001%2Fweather_app" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;authentication.click&quot;,&quot;payload&quot;:{&quot;location_in_page&quot;:&quot;star button&quot;,&quot;repository_id&quot;:748052548,&quot;auth_type&quot;:&quot;LOG_IN&quot;,&quot;originating_url&quot;:&quot;https://github.com/sayansarkar2001/weather_app/blob/main/src/App.test.js&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="5a50fca542a74b72da451626bcdf0ca99963351257441041509888100a7c2f6f" aria-label="You must be signed in to star a repository" data-view-component="true" class="tooltipped tooltipped-s btn-sm btn BtnGroup-item">    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-star v-align-text-bottom d-inline-block mr-2">
    <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"></path>
</svg><span data-view-component="true" class="d-inline">
          Star
</span>          <span id="repo-stars-counter-star" aria-label="0 users starred this repository" data-singular-suffix="user starred this repository" data-plural-suffix="users starred this repository" data-turbo-replace="true" title="0" data-view-component="true" class="Counter js-social-count">0</span>
</a>        <button aria-label="You must be signed in to add this repository to a list" type="button" disabled="disabled" data-view-component="true" class="btn-sm btn BtnGroup-item px-2">    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-triangle-down">
    <path d="m4.427 7.427 3.396 3.396a.25.25 0 0 0 .354 0l3.396-3.396A.25.25 0 0 0 11.396 7H4.604a.25.25 0 0 0-.177.427Z"></path>
</svg>
</button></div>
  </li>

</ul>

        </div>
      </div>

        <div id="responsive-meta-container" data-turbo-replace="">
</div>


          <nav data-pjax="#js-repo-pjax-container" aria-label="Repository" data-view-component="true" class="js-repo-nav js-sidenav-container-pjax js-responsive-underlinenav overflow-hidden UnderlineNav px-3 px-md-4 px-lg-5">

  <ul data-view-component="true" class="UnderlineNav-body list-style-none">
      <li data-view-component="true" class="d-inline-flex">
  <a id="code-tab" href="https://github.com/sayansarkar2001/weather_app" data-tab-item="i0code-tab" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches repo_packages repo_deployments repo_attestations /sayansarkar2001/weather_app" data-pjax="#repo-content-pjax-container" data-turbo-frame="repo-content-turbo-frame" data-hotkey="g c" data-analytics-event="{&quot;category&quot;:&quot;Underline navbar&quot;,&quot;action&quot;:&quot;Click tab&quot;,&quot;label&quot;:&quot;Code&quot;,&quot;target&quot;:&quot;UNDERLINE_NAV.TAB&quot;}" aria-current="page" data-view-component="true" class="UnderlineNav-item no-wrap js-responsive-underlinenav-item js-selected-navigation-item selected">
    
              <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-code UnderlineNav-octicon d-none d-sm-inline">
    <path d="m11.28 3.22 4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734L13.94 8l-3.72-3.72a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215Zm-6.56 0a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042L2.06 8l3.72 3.72a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L.47 8.53a.75.75 0 0 1 0-1.06Z"></path>
</svg>
        <span data-content="Code">Code</span>
          <span id="code-repo-tab-count" data-pjax-replace="" data-turbo-replace="" title="Not available" data-view-component="true" class="Counter"></span>


    
</a></li>
      <li data-view-component="true" class="d-inline-flex">
  <a id="issues-tab" href="https://github.com/sayansarkar2001/weather_app/issues" data-tab-item="i1issues-tab" data-selected-links="repo_issues repo_labels repo_milestones /sayansarkar2001/weather_app/issues /_view_fragments/issues/index/sayansarkar2001/weather_app/layout" data-pjax="#repo-content-pjax-container" data-turbo-frame="repo-content-turbo-frame" data-hotkey="g i" data-analytics-event="{&quot;category&quot;:&quot;Underline navbar&quot;,&quot;action&quot;:&quot;Click tab&quot;,&quot;label&quot;:&quot;Issues&quot;,&quot;target&quot;:&quot;UNDERLINE_NAV.TAB&quot;}" data-view-component="true" class="UnderlineNav-item no-wrap js-responsive-underlinenav-item js-selected-navigation-item">
    
              <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-issue-opened UnderlineNav-octicon d-none d-sm-inline">
    <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path><path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Z"></path>
</svg>
        <span data-content="Issues">Issues</span>
          <span id="issues-repo-tab-count" data-pjax-replace="" data-turbo-replace="" title="0" hidden="hidden" data-view-component="true" class="Counter">0</span>


    
</a></li>
      <li data-view-component="true" class="d-inline-flex">
  <a id="pull-requests-tab" href="https://github.com/sayansarkar2001/weather_app/pulls" data-tab-item="i2pull-requests-tab" data-selected-links="repo_pulls checks /sayansarkar2001/weather_app/pulls" data-pjax="#repo-content-pjax-container" data-turbo-frame="repo-content-turbo-frame" data-hotkey="g p" data-analytics-event="{&quot;category&quot;:&quot;Underline navbar&quot;,&quot;action&quot;:&quot;Click tab&quot;,&quot;label&quot;:&quot;Pull requests&quot;,&quot;target&quot;:&quot;UNDERLINE_NAV.TAB&quot;}" data-view-component="true" class="UnderlineNav-item no-wrap js-responsive-underlinenav-item js-selected-navigation-item">
    
              <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-git-pull-request UnderlineNav-octicon d-none d-sm-inline">
    <path d="M1.5 3.25a2.25 2.25 0 1 1 3 2.122v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.25 2.25 0 0 1 1.5 3.25Zm5.677-.177L9.573.677A.25.25 0 0 1 10 .854V2.5h1A2.5 2.5 0 0 1 13.5 5v5.628a2.251 2.251 0 1 1-1.5 0V5a1 1 0 0 0-1-1h-1v1.646a.25.25 0 0 1-.427.177L7.177 3.427a.25.25 0 0 1 0-.354ZM3.75 2.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm0 9.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm8.25.75a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Z"></path>
</svg>
        <span data-content="Pull requests">Pull requests</span>
          <span id="pull-requests-repo-tab-count" data-pjax-replace="" data-turbo-replace="" title="0" hidden="hidden" data-view-component="true" class="Counter">0</span>


    
</a></li>
      <li data-view-component="true" class="d-inline-flex">
  <a id="actions-tab" href="https://github.com/sayansarkar2001/weather_app/actions" data-tab-item="i3actions-tab" data-selected-links="repo_actions /sayansarkar2001/weather_app/actions" data-pjax="#repo-content-pjax-container" data-turbo-frame="repo-content-turbo-frame" data-hotkey="g a" data-analytics-event="{&quot;category&quot;:&quot;Underline navbar&quot;,&quot;action&quot;:&quot;Click tab&quot;,&quot;label&quot;:&quot;Actions&quot;,&quot;target&quot;:&quot;UNDERLINE_NAV.TAB&quot;}" data-view-component="true" class="UnderlineNav-item no-wrap js-responsive-underlinenav-item js-selected-navigation-item">
    
              <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-play UnderlineNav-octicon d-none d-sm-inline">
    <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Zm4.879-2.773 4.264 2.559a.25.25 0 0 1 0 .428l-4.264 2.559A.25.25 0 0 1 6 10.559V5.442a.25.25 0 0 1 .379-.215Z"></path>
</svg>
        <span data-content="Actions">Actions</span>
          <span id="actions-repo-tab-count" data-pjax-replace="" data-turbo-replace="" title="Not available" data-view-component="true" class="Counter"></span>


    
</a></li>
      <li data-view-component="true" class="d-inline-flex">
  <a id="projects-tab" href="https://github.com/sayansarkar2001/weather_app/projects" data-tab-item="i4projects-tab" data-selected-links="repo_projects new_repo_project repo_project /sayansarkar2001/weather_app/projects" data-pjax="#repo-content-pjax-container" data-turbo-frame="repo-content-turbo-frame" data-hotkey="g b" data-analytics-event="{&quot;category&quot;:&quot;Underline navbar&quot;,&quot;action&quot;:&quot;Click tab&quot;,&quot;label&quot;:&quot;Projects&quot;,&quot;target&quot;:&quot;UNDERLINE_NAV.TAB&quot;}" data-view-component="true" class="UnderlineNav-item no-wrap js-responsive-underlinenav-item js-selected-navigation-item">
    
              <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-table UnderlineNav-octicon d-none d-sm-inline">
    <path d="M0 1.75C0 .784.784 0 1.75 0h12.5C15.216 0 16 .784 16 1.75v12.5A1.75 1.75 0 0 1 14.25 16H1.75A1.75 1.75 0 0 1 0 14.25ZM6.5 6.5v8h7.75a.25.25 0 0 0 .25-.25V6.5Zm8-1.5V1.75a.25.25 0 0 0-.25-.25H6.5V5Zm-13 1.5v7.75c0 .138.112.25.25.25H5v-8ZM5 5V1.5H1.75a.25.25 0 0 0-.25.25V5Z"></path>
</svg>
        <span data-content="Projects">Projects</span>
          <span id="projects-repo-tab-count" data-pjax-replace="" data-turbo-replace="" title="0" hidden="hidden" data-view-component="true" class="Counter">0</span>


    
</a></li>
      <li data-view-component="true" class="d-inline-flex">
  <a id="security-tab" href="https://github.com/sayansarkar2001/weather_app/security" data-tab-item="i5security-tab" data-selected-links="security overview alerts policy token_scanning code_scanning /sayansarkar2001/weather_app/security" data-pjax="#repo-content-pjax-container" data-turbo-frame="repo-content-turbo-frame" data-hotkey="g s" data-analytics-event="{&quot;category&quot;:&quot;Underline navbar&quot;,&quot;action&quot;:&quot;Click tab&quot;,&quot;label&quot;:&quot;Security&quot;,&quot;target&quot;:&quot;UNDERLINE_NAV.TAB&quot;}" data-view-component="true" class="UnderlineNav-item no-wrap js-responsive-underlinenav-item js-selected-navigation-item">
    
              <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-shield UnderlineNav-octicon d-none d-sm-inline">
    <path d="M7.467.133a1.748 1.748 0 0 1 1.066 0l5.25 1.68A1.75 1.75 0 0 1 15 3.48V7c0 1.566-.32 3.182-1.303 4.682-.983 1.498-2.585 2.813-5.032 3.855a1.697 1.697 0 0 1-1.33 0c-2.447-1.042-4.049-2.357-5.032-3.855C1.32 10.182 1 8.566 1 7V3.48a1.75 1.75 0 0 1 1.217-1.667Zm.61 1.429a.25.25 0 0 0-.153 0l-5.25 1.68a.25.25 0 0 0-.174.238V7c0 1.358.275 2.666 1.057 3.86.784 1.194 2.121 2.34 4.366 3.297a.196.196 0 0 0 .154 0c2.245-.956 3.582-2.104 4.366-3.298C13.225 9.666 13.5 8.36 13.5 7V3.48a.251.251 0 0 0-.174-.237l-5.25-1.68ZM8.75 4.75v3a.75.75 0 0 1-1.5 0v-3a.75.75 0 0 1 1.5 0ZM9 10.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"></path>
</svg>
        <span data-content="Security">Security</span>
          

    
</a></li>
      <li data-view-component="true" class="d-inline-flex">
  <a id="insights-tab" href="https://github.com/sayansarkar2001/weather_app/pulse" data-tab-item="i6insights-tab" data-selected-links="repo_graphs repo_contributors dependency_graph dependabot_updates pulse people community /sayansarkar2001/weather_app/pulse" data-pjax="#repo-content-pjax-container" data-turbo-frame="repo-content-turbo-frame" data-analytics-event="{&quot;category&quot;:&quot;Underline navbar&quot;,&quot;action&quot;:&quot;Click tab&quot;,&quot;label&quot;:&quot;Insights&quot;,&quot;target&quot;:&quot;UNDERLINE_NAV.TAB&quot;}" data-view-component="true" class="UnderlineNav-item no-wrap js-responsive-underlinenav-item js-selected-navigation-item">
    
              <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-graph UnderlineNav-octicon d-none d-sm-inline">
    <path d="M1.5 1.75V13.5h13.75a.75.75 0 0 1 0 1.5H.75a.75.75 0 0 1-.75-.75V1.75a.75.75 0 0 1 1.5 0Zm14.28 2.53-5.25 5.25a.75.75 0 0 1-1.06 0L7 7.06 4.28 9.78a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042l3.25-3.25a.75.75 0 0 1 1.06 0L10 7.94l4.72-4.72a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042Z"></path>
</svg>
        <span data-content="Insights">Insights</span>
          <span id="insights-repo-tab-count" data-pjax-replace="" data-turbo-replace="" title="Not available" data-view-component="true" class="Counter"></span>


    
</a></li>
</ul>
    <div style="visibility:hidden;" data-view-component="true" class="UnderlineNav-actions js-responsive-underlinenav-overflow position-absolute pr-3 pr-md-4 pr-lg-5 right-0">      <action-menu data-select-variant="none" data-view-component="true" data-catalyst="">
  <focus-group direction="vertical" mnemonics="" retain="">
    <button id="action-menu-4c7ef61c-d83c-4018-80d1-872fec5e1757-button" popovertarget="action-menu-4c7ef61c-d83c-4018-80d1-872fec5e1757-overlay" aria-controls="action-menu-4c7ef61c-d83c-4018-80d1-872fec5e1757-list" aria-haspopup="true" aria-labelledby="tooltip-f4f739ea-2076-448f-9e9c-d6aa7f11c4d4" type="button" data-view-component="true" class="Button Button--iconOnly Button--secondary Button--medium UnderlineNav-item">  <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-kebab-horizontal Button-visual">
    <path d="M8 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM1.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm13 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path>
</svg>
</button><tool-tip id="tooltip-f4f739ea-2076-448f-9e9c-d6aa7f11c4d4" for="action-menu-4c7ef61c-d83c-4018-80d1-872fec5e1757-button" popover="manual" data-direction="s" data-type="label" data-view-component="true" class="sr-only position-absolute" aria-hidden="true" role="tooltip"><template shadowrootmode="open"><style>
      :host {
        --tooltip-top: var(--tool-tip-position-top, 0);
        --tooltip-left: var(--tool-tip-position-left, 0);
        padding: var(--overlay-paddingBlock-condensed) var(--overlay-padding-condensed) !important;
        font: var(--text-body-shorthand-small);
        color: var(--fgColor-onEmphasis, var(--color-fg-on-emphasis)) !important;
        text-align: center;
        text-decoration: none;
        text-shadow: none;
        text-transform: none;
        letter-spacing: normal;
        word-wrap: break-word;
        white-space: pre;
        background: var(--bgColor-emphasis, var(--color-neutral-emphasis-plus)) !important;
        border-radius: var(--borderRadius-medium);
        border: 0 !important;
        opacity: 0;
        max-width: var(--overlay-width-small);
        word-wrap: break-word;
        white-space: normal;
        width: max-content !important;
        inset: var(--tooltip-top) auto auto var(--tooltip-left) !important;
        overflow: visible !important;
        text-wrap: balance;
      }

      :host(:is(.tooltip-n, .tooltip-nw, .tooltip-ne)) {
        --tooltip-top: calc(var(--tool-tip-position-top, 0) - var(--overlay-offset, 0.25rem));
        --tooltip-left: var(--tool-tip-position-left);
      }

      :host(:is(.tooltip-s, .tooltip-sw, .tooltip-se)) {
        --tooltip-top: calc(var(--tool-tip-position-top, 0) + var(--overlay-offset, 0.25rem));
        --tooltip-left: var(--tool-tip-position-left);
      }

      :host(.tooltip-w) {
        --tooltip-top: var(--tool-tip-position-top);
        --tooltip-left: calc(var(--tool-tip-position-left, 0) - var(--overlay-offset, 0.25rem));
      }

      :host(.tooltip-e) {
        --tooltip-top: var(--tool-tip-position-top);
        --tooltip-left: calc(var(--tool-tip-position-left, 0) + var(--overlay-offset, 0.25rem));
      }

      :host:after{
        position: absolute;
        display: block;
        right: 0;
        left: 0;
        height: var(--overlay-offset, 0.25rem);
        content: "";
      }

      :host(.tooltip-s):after,
      :host(.tooltip-se):after,
      :host(.tooltip-sw):after {
        bottom: 100%
      }

      :host(.tooltip-n):after,
      :host(.tooltip-ne):after,
      :host(.tooltip-nw):after {
        top: 100%;
      }

      @keyframes tooltip-appear {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }

      :host(:popover-open),
      :host(:popover-open):before {
        animation-name: tooltip-appear;
        animation-duration: .1s;
        animation-fill-mode: forwards;
        animation-timing-function: ease-in;
      }

      :host(.\:popover-open) {
        animation-name: tooltip-appear;
        animation-duration: .1s;
        animation-fill-mode: forwards;
        animation-timing-function: ease-in;
      }

      @media (forced-colors: active) {
        :host {
          outline: solid 1px transparent;
        }

        :host:before {
          display: none;
        }
      }
    </style><slot></slot></template>Additional navigation options</tool-tip>


<anchored-position id="action-menu-4c7ef61c-d83c-4018-80d1-872fec5e1757-overlay" anchor="action-menu-4c7ef61c-d83c-4018-80d1-872fec5e1757-button" align="start" side="outside-bottom" anchor-offset="normal" popover="auto" data-view-component="true" style="inset: 36px auto auto 0px;">
  <div data-view-component="true" class="Overlay Overlay--size-auto">
    
      <div data-view-component="true" class="Overlay-body Overlay-body--paddingNone">          <action-list data-catalyst="">
  <div data-view-component="true">
    <ul aria-labelledby="action-menu-4c7ef61c-d83c-4018-80d1-872fec5e1757-button" id="action-menu-4c7ef61c-d83c-4018-80d1-872fec5e1757-list" role="menu" data-view-component="true" class="ActionListWrap--inset ActionListWrap">
        <li hidden="" data-menu-item="i0code-tab" data-targets="action-list.items" role="none" data-view-component="true" class="ActionListItem">
    
    
    <a tabindex="-1" id="item-cc9dffb7-a564-4916-a139-e6e55d831b0d" href="https://github.com/sayansarkar2001/weather_app" role="menuitem" data-view-component="true" class="ActionListContent ActionListContent--visual16">
        <span class="ActionListItem-visual ActionListItem-visual--leading">
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-code">
    <path d="m11.28 3.22 4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734L13.94 8l-3.72-3.72a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215Zm-6.56 0a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042L2.06 8l3.72 3.72a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L.47 8.53a.75.75 0 0 1 0-1.06Z"></path>
</svg>
        </span>
      
        <span data-view-component="true" class="ActionListItem-label">
          Code
</span></a>
  
</li>
        <li hidden="" data-menu-item="i1issues-tab" data-targets="action-list.items" role="none" data-view-component="true" class="ActionListItem">
    
    
    <a tabindex="-1" id="item-31527107-a31b-495c-9122-56719a5c028b" href="https://github.com/sayansarkar2001/weather_app/issues" role="menuitem" data-view-component="true" class="ActionListContent ActionListContent--visual16">
        <span class="ActionListItem-visual ActionListItem-visual--leading">
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-issue-opened">
    <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path><path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Z"></path>
</svg>
        </span>
      
        <span data-view-component="true" class="ActionListItem-label">
          Issues
</span></a>
  
</li>
        <li hidden="" data-menu-item="i2pull-requests-tab" data-targets="action-list.items" role="none" data-view-component="true" class="ActionListItem">
    
    
    <a tabindex="-1" id="item-d4483b5e-34c9-4339-afd6-2dadc94219d5" href="https://github.com/sayansarkar2001/weather_app/pulls" role="menuitem" data-view-component="true" class="ActionListContent ActionListContent--visual16">
        <span class="ActionListItem-visual ActionListItem-visual--leading">
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-git-pull-request">
    <path d="M1.5 3.25a2.25 2.25 0 1 1 3 2.122v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.25 2.25 0 0 1 1.5 3.25Zm5.677-.177L9.573.677A.25.25 0 0 1 10 .854V2.5h1A2.5 2.5 0 0 1 13.5 5v5.628a2.251 2.251 0 1 1-1.5 0V5a1 1 0 0 0-1-1h-1v1.646a.25.25 0 0 1-.427.177L7.177 3.427a.25.25 0 0 1 0-.354ZM3.75 2.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm0 9.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm8.25.75a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Z"></path>
</svg>
        </span>
      
        <span data-view-component="true" class="ActionListItem-label">
          Pull requests
</span></a>
  
</li>
        <li hidden="" data-menu-item="i3actions-tab" data-targets="action-list.items" role="none" data-view-component="true" class="ActionListItem">
    
    
    <a tabindex="-1" id="item-7ca35523-faa1-43fd-96b2-21df8975996d" href="https://github.com/sayansarkar2001/weather_app/actions" role="menuitem" data-view-component="true" class="ActionListContent ActionListContent--visual16">
        <span class="ActionListItem-visual ActionListItem-visual--leading">
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-play">
    <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Zm4.879-2.773 4.264 2.559a.25.25 0 0 1 0 .428l-4.264 2.559A.25.25 0 0 1 6 10.559V5.442a.25.25 0 0 1 .379-.215Z"></path>
</svg>
        </span>
      
        <span data-view-component="true" class="ActionListItem-label">
          Actions
</span></a>
  
</li>
        <li hidden="" data-menu-item="i4projects-tab" data-targets="action-list.items" role="none" data-view-component="true" class="ActionListItem">
    
    
    <a tabindex="-1" id="item-ede2d79a-68bc-4551-bc2c-5833bbdc4b1c" href="https://github.com/sayansarkar2001/weather_app/projects" role="menuitem" data-view-component="true" class="ActionListContent ActionListContent--visual16">
        <span class="ActionListItem-visual ActionListItem-visual--leading">
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-table">
    <path d="M0 1.75C0 .784.784 0 1.75 0h12.5C15.216 0 16 .784 16 1.75v12.5A1.75 1.75 0 0 1 14.25 16H1.75A1.75 1.75 0 0 1 0 14.25ZM6.5 6.5v8h7.75a.25.25 0 0 0 .25-.25V6.5Zm8-1.5V1.75a.25.25 0 0 0-.25-.25H6.5V5Zm-13 1.5v7.75c0 .138.112.25.25.25H5v-8ZM5 5V1.5H1.75a.25.25 0 0 0-.25.25V5Z"></path>
</svg>
        </span>
      
        <span data-view-component="true" class="ActionListItem-label">
          Projects
</span></a>
  
</li>
        <li hidden="" data-menu-item="i5security-tab" data-targets="action-list.items" role="none" data-view-component="true" class="ActionListItem">
    
    
    <a tabindex="-1" id="item-19656c44-2a32-4fab-8c5d-2de50af28607" href="https://github.com/sayansarkar2001/weather_app/security" role="menuitem" data-view-component="true" class="ActionListContent ActionListContent--visual16">
        <span class="ActionListItem-visual ActionListItem-visual--leading">
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-shield">
    <path d="M7.467.133a1.748 1.748 0 0 1 1.066 0l5.25 1.68A1.75 1.75 0 0 1 15 3.48V7c0 1.566-.32 3.182-1.303 4.682-.983 1.498-2.585 2.813-5.032 3.855a1.697 1.697 0 0 1-1.33 0c-2.447-1.042-4.049-2.357-5.032-3.855C1.32 10.182 1 8.566 1 7V3.48a1.75 1.75 0 0 1 1.217-1.667Zm.61 1.429a.25.25 0 0 0-.153 0l-5.25 1.68a.25.25 0 0 0-.174.238V7c0 1.358.275 2.666 1.057 3.86.784 1.194 2.121 2.34 4.366 3.297a.196.196 0 0 0 .154 0c2.245-.956 3.582-2.104 4.366-3.298C13.225 9.666 13.5 8.36 13.5 7V3.48a.251.251 0 0 0-.174-.237l-5.25-1.68ZM8.75 4.75v3a.75.75 0 0 1-1.5 0v-3a.75.75 0 0 1 1.5 0ZM9 10.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"></path>
</svg>
        </span>
      
        <span data-view-component="true" class="ActionListItem-label">
          Security
</span></a>
  
</li>
        <li hidden="" data-menu-item="i6insights-tab" data-targets="action-list.items" role="none" data-view-component="true" class="ActionListItem">
    
    
    <a tabindex="-1" id="item-8990e813-7401-4d57-8ca8-758890ce8256" href="https://github.com/sayansarkar2001/weather_app/pulse" role="menuitem" data-view-component="true" class="ActionListContent ActionListContent--visual16">
        <span class="ActionListItem-visual ActionListItem-visual--leading">
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-graph">
    <path d="M1.5 1.75V13.5h13.75a.75.75 0 0 1 0 1.5H.75a.75.75 0 0 1-.75-.75V1.75a.75.75 0 0 1 1.5 0Zm14.28 2.53-5.25 5.25a.75.75 0 0 1-1.06 0L7 7.06 4.28 9.78a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042l3.25-3.25a.75.75 0 0 1 1.06 0L10 7.94l4.72-4.72a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042Z"></path>
</svg>
        </span>
      
        <span data-view-component="true" class="ActionListItem-label">
          Insights
</span></a>
  
</li>
</ul>    
</div></action-list>


</div>
      
</div></anchored-position>  </focus-group>
</action-menu></div>
</nav>

  </div>

  



<turbo-frame id="repo-content-turbo-frame" target="_top" data-turbo-action="advance" class="">
    <div id="repo-content-pjax-container" class="repository-content ">
    



    
      
    








<react-app app-name="react-code-view" initial-path="/sayansarkar2001/weather_app/blob/main/src/App.test.js" style="display: block; min-height: calc(100vh - 64px)" data-ssr="false" data-lazy="false" data-alternate="false" data-catalyst="" class="loaded">
  
  <script type="application/json" data-target="react-app.embeddedData">{"payload":{"allShortcutsEnabled":false,"fileTree":{"src":{"items":[{"name":"images","path":"src/images","contentType":"directory"},{"name":"App.css","path":"src/App.css","contentType":"file"},{"name":"App.js","path":"src/App.js","contentType":"file"},{"name":"App.test.js","path":"src/App.test.js","contentType":"file"},{"name":"apiKeys.js","path":"src/apiKeys.js","contentType":"file"},{"name":"currentLocation.js","path":"src/currentLocation.js","contentType":"file"},{"name":"forcast.js","path":"src/forcast.js","contentType":"file"},{"name":"index.css","path":"src/index.css","contentType":"file"},{"name":"index.js","path":"src/index.js","contentType":"file"},{"name":"logo.svg","path":"src/logo.svg","contentType":"file"},{"name":"reportWebVitals.js","path":"src/reportWebVitals.js","contentType":"file"},{"name":"serviceWorker.js","path":"src/serviceWorker.js","contentType":"file"},{"name":"setupTests.js","path":"src/setupTests.js","contentType":"file"}],"totalCount":13},"":{"items":[{"name":"public","path":"public","contentType":"directory"},{"name":"src","path":"src","contentType":"directory"},{"name":".gitignore","path":".gitignore","contentType":"file"},{"name":"README.md","path":"README.md","contentType":"file"},{"name":"package-lock.json","path":"package-lock.json","contentType":"file"},{"name":"package.json","path":"package.json","contentType":"file"}],"totalCount":6}},"fileTreeProcessingTime":3.2102530000000002,"foldersToFetch":[],"repo":{"id":748052548,"defaultBranch":"main","name":"weather_app","ownerLogin":"sayansarkar2001","currentUserCanPush":false,"isFork":false,"isEmpty":false,"createdAt":"2024-01-25T07:07:54.000Z","ownerAvatar":"https://avatars.githubusercontent.com/u/95311933?v=4","public":true,"private":false,"isOrgOwned":false},"codeLineWrapEnabled":false,"symbolsExpanded":false,"treeExpanded":true,"refInfo":{"name":"main","listCacheKey":"v0:1706166941.0","canEdit":false,"refType":"branch","currentOid":"8aac016bb0f2f1886d26fdfbe6d277a57f18a75a"},"path":"src/App.test.js","currentUser":null,"blob":{"rawLines":["import { render, screen } from '@testing-library/react';","import App from './App';","","test('renders learn react link', () =\u003e {","  render(\u003cApp /\u003e);","  const linkElement = screen.getByText(/learn react/i);","  expect(linkElement).toBeInTheDocument();","});"],"stylingDirectives":[[{"s":0,"e":6,"c":"pl-k"},{"s":7,"e":8,"c":"pl-kos"},{"s":9,"e":15,"c":"pl-s1"},{"s":15,"e":16,"c":"pl-kos"},{"s":17,"e":23,"c":"pl-s1"},{"s":24,"e":25,"c":"pl-kos"},{"s":26,"e":30,"c":"pl-k"},{"s":31,"e":55,"c":"pl-s"},{"s":55,"e":56,"c":"pl-kos"}],[{"s":0,"e":6,"c":"pl-k"},{"s":7,"e":10,"c":"pl-v"},{"s":11,"e":15,"c":"pl-k"},{"s":16,"e":23,"c":"pl-s"},{"s":23,"e":24,"c":"pl-kos"}],[],[{"s":0,"e":4,"c":"pl-en"},{"s":4,"e":5,"c":"pl-kos"},{"s":5,"e":31,"c":"pl-s"},{"s":31,"e":32,"c":"pl-kos"},{"s":33,"e":34,"c":"pl-kos"},{"s":34,"e":35,"c":"pl-kos"},{"s":36,"e":38,"c":"pl-c1"},{"s":39,"e":40,"c":"pl-kos"}],[{"s":2,"e":8,"c":"pl-en"},{"s":8,"e":9,"c":"pl-kos"},{"s":9,"e":10,"c":"pl-c1"},{"s":10,"e":13,"c":"pl-ent"},{"s":14,"e":15,"c":"pl-c1"},{"s":15,"e":16,"c":"pl-c1"},{"s":16,"e":17,"c":"pl-kos"},{"s":17,"e":18,"c":"pl-kos"}],[{"s":2,"e":7,"c":"pl-k"},{"s":8,"e":19,"c":"pl-s1"},{"s":20,"e":21,"c":"pl-c1"},{"s":22,"e":28,"c":"pl-s1"},{"s":28,"e":29,"c":"pl-kos"},{"s":29,"e":38,"c":"pl-en"},{"s":38,"e":39,"c":"pl-kos"},{"s":39,"e":53,"c":"pl-pds"},{"s":39,"e":40,"c":"pl-c1"},{"s":51,"e":52,"c":"pl-c1"},{"s":53,"e":54,"c":"pl-kos"},{"s":54,"e":55,"c":"pl-kos"}],[{"s":2,"e":8,"c":"pl-en"},{"s":8,"e":9,"c":"pl-kos"},{"s":9,"e":20,"c":"pl-s1"},{"s":20,"e":21,"c":"pl-kos"},{"s":21,"e":22,"c":"pl-kos"},{"s":22,"e":39,"c":"pl-en"},{"s":39,"e":40,"c":"pl-kos"},{"s":40,"e":41,"c":"pl-kos"},{"s":41,"e":42,"c":"pl-kos"}],[{"s":0,"e":1,"c":"pl-kos"},{"s":1,"e":2,"c":"pl-kos"},{"s":2,"e":3,"c":"pl-kos"}]],"colorizedLines":null,"csv":null,"csvError":null,"dependabotInfo":{"showConfigurationBanner":false,"configFilePath":null,"networkDependabotPath":"/sayansarkar2001/weather_app/network/updates","dismissConfigurationNoticePath":"/settings/dismiss-notice/dependabot_configuration_notice","configurationNoticeDismissed":null},"displayName":"App.test.js","displayUrl":"https://github.com/sayansarkar2001/weather_app/blob/main/src/App.test.js?raw=true","headerInfo":{"blobSize":"246 Bytes","deleteTooltip":"You must be signed in to make or propose changes","editTooltip":"You must be signed in to make or propose changes","ghDesktopPath":"https://desktop.github.com","isGitLfs":false,"onBranch":true,"shortPath":"1f03afe","siteNavLoginPath":"/login?return_to=https%3A%2F%2Fgithub.com%2Fsayansarkar2001%2Fweather_app%2Fblob%2Fmain%2Fsrc%2FApp.test.js","isCSV":false,"isRichtext":false,"toc":null,"lineInfo":{"truncatedLoc":"8","truncatedSloc":"7"},"mode":"file"},"image":false,"isCodeownersFile":null,"isPlain":false,"isValidLegacyIssueTemplate":false,"issueTemplate":null,"discussionTemplate":null,"language":"JavaScript","languageID":183,"large":false,"planSupportInfo":{"repoIsFork":null,"repoOwnedByCurrentUser":null,"requestFullPath":"/sayansarkar2001/weather_app/blob/main/src/App.test.js","showFreeOrgGatedFeatureMessage":null,"showPlanSupportBanner":null,"upgradeDataAttributes":null,"upgradePath":null},"publishBannersInfo":{"dismissActionNoticePath":"/settings/dismiss-notice/publish_action_from_dockerfile","releasePath":"/sayansarkar2001/weather_app/releases/new?marketplace=true","showPublishActionBanner":false},"rawBlobUrl":"https://github.com/sayansarkar2001/weather_app/raw/main/src/App.test.js","renderImageOrRaw":false,"richText":null,"renderedFileInfo":null,"shortPath":null,"symbolsEnabled":true,"tabSize":8,"topBannersInfo":{"overridingGlobalFundingFile":false,"globalPreferredFundingPath":null,"showInvalidCitationWarning":false,"citationHelpUrl":"https://docs.github.com/github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/about-citation-files","actionsOnboardingTip":null},"truncated":false,"viewable":true,"workflowRedirectUrl":null,"symbols":{"timed_out":false,"not_analyzed":false,"symbols":[]}},"copilotInfo":null,"copilotAccessAllowed":false,"csrf_tokens":{"/sayansarkar2001/weather_app/branches":{"post":"gDT-95CGO1e2DHSTiclG3kd1XLzNglW6QaX3D52e3gJHaUO_pHBFym4g_WPVrtpLAXnqmoyI7-RZ4ccpQhytOA"},"/repos/preferences":{"post":"wVX7i4t4Bv_4XPRcw6iaAWspdUEeO2PpDjTZjNi4TgO8uw20FyHposEOBsclVOaIalHHBopwsg7fzmpdbyh6RQ"}}},"title":"weather_app/src/App.test.js at main · sayansarkar2001/weather_app","appPayload":{"helpUrl":"https://docs.github.com","findFileWorkerPath":"/assets-cdn/worker/find-file-worker-1583894afd38.js","findInFileWorkerPath":"/assets-cdn/worker/find-in-file-worker-3a63a487027b.js","githubDevUrl":null,"enabled_features":{"code_nav_ui_events":false,"overview_shared_code_dropdown_button":false,"react_blob_overlay":false,"copilot_conversational_ux_embedding_update":false,"copilot_smell_icebreaker_ux":true,"copilot_workspace":false}}}</script>
  <div data-target="react-app.reactRoot"><meta data-hydrostats="publish">   <button hidden="" data-testid="header-permalink-button" data-hotkey="y,Shift+Y" data-hotkey-scope="read-only-cursor-text-area"></button><button hidden="" data-hotkey="y,Shift+Y"></button><div><div class="Box-sc-g0xbh4-0 fSWWem" style="--sticky-pane-height: calc(100vh - (max(0px, 0px)));"><div class="Box-sc-g0xbh4-0 kPPmzM"><div class="Box-sc-g0xbh4-0 cIAPDV"><div tabindex="0" class="Box-sc-g0xbh4-0 gvCnwW"><div class="Box-sc-g0xbh4-0 hgUFaY"><div class="Box-sc-g0xbh4-0 eUyHuk"></div><div class="Box-sc-g0xbh4-0 gNdDUH" style="--pane-width: 320px;"><div class="Box-sc-g0xbh4-0"><div id="repos-file-tree" class="Box-sc-g0xbh4-0 jyDQiw"><div class="Box-sc-g0xbh4-0 hBSSUC"><div class="Box-sc-g0xbh4-0 iPurHz"><h2 class="Heading__StyledHeading-sc-1c1dgg0-0 jUriTl"><span role="tooltip" aria-label="Collapse file tree" id="expand-button-file-tree-button" class="Tooltip__TooltipBase-sc-17tf59c-0 gNgnVl tooltipped-se"><button data-component="IconButton" type="button" data-testid="collapse-file-tree-button" aria-labelledby="expand-button-file-tree-button" aria-expanded="true" aria-controls="repos-file-tree" data-hotkey="Control+b" class="types__StyledButton-sc-ws60qy-0 bLIGns" data-no-visuals="true"><svg aria-hidden="true" focusable="false" role="img" class="octicon octicon-sidebar-expand" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display: inline-block; user-select: none; vertical-align: text-bottom; overflow: visible;"><path d="m4.177 7.823 2.396-2.396A.25.25 0 0 1 7 5.604v4.792a.25.25 0 0 1-.427.177L4.177 8.177a.25.25 0 0 1 0-.354Z"></path><path d="M0 1.75C0 .784.784 0 1.75 0h12.5C15.216 0 16 .784 16 1.75v12.5A1.75 1.75 0 0 1 14.25 16H1.75A1.75 1.75 0 0 1 0 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25H9.5v-13Zm12.5 13a.25.25 0 0 0 .25-.25V1.75a.25.25 0 0 0-.25-.25H11v13Z"></path></svg></button></span><button hidden="" data-testid="" data-hotkey="Control+b" data-hotkey-scope="read-only-cursor-text-area"></button></h2><h2 class="Heading__StyledHeading-sc-1c1dgg0-0 imcwCi">Files</h2></div><div class="Box-sc-g0xbh4-0 hVHHYa"><div class="Box-sc-g0xbh4-0 idZfsJ"><button type="button" id="branch-picker-repos-header-ref-selector" aria-haspopup="true" aria-expanded="false" tabindex="0" data-hotkey="w" aria-label="main branch" data-testid="anchor-button" class="types__StyledButton-sc-ws60qy-0 gFWfyf react-repos-tree-pane-ref-selector width-full ref-selector-class"><span data-component="buttonContent" class="Box-sc-g0xbh4-0 kkrdEu"><span data-component="text"><div class="Box-sc-g0xbh4-0 bKgizp"><div class="Box-sc-g0xbh4-0 iPGYsi"><svg aria-hidden="true" focusable="false" role="img" class="octicon octicon-git-branch" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display: inline-block; user-select: none; vertical-align: text-bottom; overflow: visible;"><path d="M9.5 3.25a2.25 2.25 0 1 1 3 2.122V6A2.5 2.5 0 0 1 10 8.5H6a1 1 0 0 0-1 1v1.128a2.251 2.251 0 1 1-1.5 0V5.372a2.25 2.25 0 1 1 1.5 0v1.836A2.493 2.493 0 0 1 6 7h4a1 1 0 0 0 1-1v-.628A2.25 2.25 0 0 1 9.5 3.25Zm-6 0a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Zm8.25-.75a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5ZM4.25 12a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Z"></path></svg></div><div class="Box-sc-g0xbh4-0 caeYDk ref-selector-button-text-container"><span class="Text-sc-17v1xeu-0 bOMzPg">&nbsp;main</span></div></div></span><span data-component="trailingVisual" class="Box-sc-g0xbh4-0 trpoQ"><svg aria-hidden="true" focusable="false" role="img" class="octicon octicon-triangle-down" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display: inline-block; user-select: none; vertical-align: text-bottom; overflow: visible;"><path d="m4.427 7.427 3.396 3.396a.25.25 0 0 0 .354 0l3.396-3.396A.25.25 0 0 0 11.396 7H4.604a.25.25 0 0 0-.177.427Z"></path></svg></span></span></button><button hidden="" data-hotkey="w" data-hotkey-scope="read-only-cursor-text-area"></button></div><div class="Box-sc-g0xbh4-0 jahcnb"><button data-component="IconButton" type="button" aria-label="Search this repository" data-hotkey="/" data-no-visuals="true" class="types__StyledButton-sc-ws60qy-0 cHjPYp"><svg aria-hidden="true" focusable="false" role="img" class="octicon octicon-search" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display: inline-block; user-select: none; vertical-align: text-bottom; overflow: visible;"><path d="M10.68 11.74a6 6 0 0 1-7.922-8.982 6 6 0 0 1 8.982 7.922l3.04 3.04a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215ZM11.5 7a4.499 4.499 0 1 0-8.997 0A4.499 4.499 0 0 0 11.5 7Z"></path></svg></button><button hidden="" data-testid="" data-hotkey="/" data-hotkey-scope="read-only-cursor-text-area"></button></div></div></div><div class="Box-sc-g0xbh4-0 jRttMj"><span class="TextInputWrapper__TextInputBaseWrapper-sc-1mqhpbi-0 TextInputWrapper-sc-1mqhpbi-1 cXNreu jbzqwE TextInput-wrapper" aria-busy="false"><span class="TextInput-icon"><svg aria-hidden="true" focusable="false" role="img" class="octicon octicon-search" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display: inline-block; user-select: none; vertical-align: text-bottom; overflow: visible;"><path d="M10.68 11.74a6 6 0 0 1-7.922-8.982 6 6 0 0 1 8.982 7.922l3.04 3.04a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215ZM11.5 7a4.499 4.499 0 1 0-8.997 0A4.499 4.499 0 0 0 11.5 7Z"></path></svg></span><input type="text" aria-label="Go to file" role="combobox" aria-controls="file-results-list" aria-expanded="false" aria-haspopup="dialog" autocorrect="off" spellcheck="false" placeholder="Go to file" data-component="input" class="UnstyledTextInput-sc-14ypya-0 cDLBls" value=""><span class="TextInput-icon"></span></span></div><button hidden="" data-testid="" data-hotkey="t,Shift+T" data-hotkey-scope="read-only-cursor-text-area"></button><button hidden="" data-hotkey="t,Shift+T"></button><div class="Box-sc-g0xbh4-0 bYLCoz"><div><div class="react-tree-show-tree-items"><div data-testid="repos-file-tree-container" class="Box-sc-g0xbh4-0 erWCJP"><nav aria-label="File Tree Navigation"><span role="status" aria-live="polite" aria-atomic="true" class="_VisuallyHidden__VisuallyHidden-sc-11jhm7a-0 rTZSs"></span><ul role="tree" aria-label="Files" class="TreeView__UlBox-sc-4ex6b6-0 dgvcvm"><li class="PRIVATE_TreeView-item" tabindex="-1" id="public-item" role="treeitem" aria-labelledby=":r2:" aria-describedby=":r3: :r4:" aria-level="1" aria-expanded="false" aria-selected="false"><div class="PRIVATE_TreeView-item-container" style="--level: 1; content-visibility: auto; contain-intrinsic-size: auto 2rem;"><div style="grid-area: spacer; display: flex;"><div style="width: 100%; display: flex;"></div></div><div class="PRIVATE_TreeView-item-toggle PRIVATE_TreeView-item-toggle--hover PRIVATE_TreeView-item-toggle--end"><svg aria-hidden="true" focusable="false" class="octicon octicon-chevron-right" viewBox="0 0 12 12" width="12" height="12" fill="currentColor" style="display: inline-block; user-select: none; vertical-align: text-bottom; overflow: visible;"><path d="M4.7 10c-.2 0-.4-.1-.5-.2-.3-.3-.3-.8 0-1.1L6.9 6 4.2 3.3c-.3-.3-.3-.8 0-1.1.3-.3.8-.3 1.1 0l3.3 3.2c.3.3.3.8 0 1.1L5.3 9.7c-.2.2-.4.3-.6.3Z"></path></svg></div><div id=":r2:" class="PRIVATE_TreeView-item-content"><div class="PRIVATE_VisuallyHidden" aria-hidden="true" id=":r3:"></div><div class="PRIVATE_TreeView-item-visual" aria-hidden="true"><div class="PRIVATE_TreeView-directory-icon"><svg aria-hidden="true" focusable="false" class="octicon octicon-file-directory-fill" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display: inline-block; user-select: none; vertical-align: text-bottom; overflow: visible;"><path d="M1.75 1A1.75 1.75 0 0 0 0 2.75v10.5C0 14.216.784 15 1.75 15h12.5A1.75 1.75 0 0 0 16 13.25v-8.5A1.75 1.75 0 0 0 14.25 3H7.5a.25.25 0 0 1-.2-.1l-.9-1.2C6.07 1.26 5.55 1 5 1H1.75Z"></path></svg></div></div><span class="PRIVATE_TreeView-item-content-text"><span>public</span></span></div></div></li><li class="PRIVATE_TreeView-item" tabindex="-1" id="src-item" role="treeitem" aria-labelledby=":r5:" aria-describedby=":r6: :r7:" aria-level="1" aria-expanded="true" aria-selected="false"><div class="PRIVATE_TreeView-item-container" style="--level: 1; content-visibility: auto; contain-intrinsic-size: auto 2rem;"><div style="grid-area: spacer; display: flex;"><div style="width: 100%; display: flex;"></div></div><div class="PRIVATE_TreeView-item-toggle PRIVATE_TreeView-item-toggle--hover PRIVATE_TreeView-item-toggle--end"><svg aria-hidden="true" focusable="false" class="octicon octicon-chevron-down" viewBox="0 0 12 12" width="12" height="12" fill="currentColor" style="display: inline-block; user-select: none; vertical-align: text-bottom; overflow: visible;"><path d="M6 8.825c-.2 0-.4-.1-.5-.2l-3.3-3.3c-.3-.3-.3-.8 0-1.1.3-.3.8-.3 1.1 0l2.7 2.7 2.7-2.7c.3-.3.8-.3 1.1 0 .3.3.3.8 0 1.1l-3.2 3.2c-.2.2-.4.3-.6.3Z"></path></svg></div><div id=":r5:" class="PRIVATE_TreeView-item-content"><div class="PRIVATE_VisuallyHidden" aria-hidden="true" id=":r6:"></div><div class="PRIVATE_TreeView-item-visual" aria-hidden="true"><div class="PRIVATE_TreeView-directory-icon"><svg aria-hidden="true" focusable="false" class="octicon octicon-file-directory-open-fill" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display: inline-block; user-select: none; vertical-align: text-bottom; overflow: visible;"><path d="M.513 1.513A1.75 1.75 0 0 1 1.75 1h3.5c.55 0 1.07.26 1.4.7l.9 1.2a.25.25 0 0 0 .2.1H13a1 1 0 0 1 1 1v.5H2.75a.75.75 0 0 0 0 1.5h11.978a1 1 0 0 1 .994 1.117L15 13.25A1.75 1.75 0 0 1 13.25 15H1.75A1.75 1.75 0 0 1 0 13.25V2.75c0-.464.184-.91.513-1.237Z"></path></svg></div></div><span class="PRIVATE_TreeView-item-content-text"><span>src</span></span></div></div><ul role="group" style="list-style: none; padding: 0px; margin: 0px;"><li class="PRIVATE_TreeView-item" tabindex="-1" id="src/images-item" role="treeitem" aria-labelledby=":r8:" aria-describedby=":r9: :ra:" aria-level="2" aria-expanded="false" aria-selected="false"><div class="PRIVATE_TreeView-item-container" style="--level: 2; content-visibility: auto; contain-intrinsic-size: auto 2rem;"><div style="grid-area: spacer; display: flex;"><div style="width: 100%; display: flex;"><div class="PRIVATE_TreeView-item-level-line"></div></div></div><div class="PRIVATE_TreeView-item-toggle PRIVATE_TreeView-item-toggle--hover"><svg aria-hidden="true" focusable="false" class="octicon octicon-chevron-right" viewBox="0 0 12 12" width="12" height="12" fill="currentColor" style="display: inline-block; user-select: none; vertical-align: text-bottom; overflow: visible;"><path d="M4.7 10c-.2 0-.4-.1-.5-.2-.3-.3-.3-.8 0-1.1L6.9 6 4.2 3.3c-.3-.3-.3-.8 0-1.1.3-.3.8-.3 1.1 0l3.3 3.2c.3.3.3.8 0 1.1L5.3 9.7c-.2.2-.4.3-.6.3Z"></path></svg></div><div id=":r8:" class="PRIVATE_TreeView-item-content"><div class="PRIVATE_VisuallyHidden" aria-hidden="true" id=":r9:"></div><div class="PRIVATE_TreeView-item-visual" aria-hidden="true"><div class="PRIVATE_TreeView-directory-icon"><svg aria-hidden="true" focusable="false" class="octicon octicon-file-directory-fill" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display: inline-block; user-select: none; vertical-align: text-bottom; overflow: visible;"><path d="M1.75 1A1.75 1.75 0 0 0 0 2.75v10.5C0 14.216.784 15 1.75 15h12.5A1.75 1.75 0 0 0 16 13.25v-8.5A1.75 1.75 0 0 0 14.25 3H7.5a.25.25 0 0 1-.2-.1l-.9-1.2C6.07 1.26 5.55 1 5 1H1.75Z"></path></svg></div></div><span class="PRIVATE_TreeView-item-content-text"><span>images</span></span></div></div></li><li class="PRIVATE_TreeView-item" tabindex="-1" id="src/App.css-item" role="treeitem" aria-labelledby=":rb:" aria-describedby=":rc: :rd:" aria-level="2" aria-selected="false"><div class="PRIVATE_TreeView-item-container" style="--level: 2; content-visibility: auto; contain-intrinsic-size: auto 2rem;"><div style="grid-area: spacer; display: flex;"><div style="width: 100%; display: flex;"><div class="PRIVATE_TreeView-item-level-line"></div></div></div><div id=":rb:" class="PRIVATE_TreeView-item-content"><div class="PRIVATE_VisuallyHidden" aria-hidden="true" id=":rc:"></div><div class="PRIVATE_TreeView-item-visual" aria-hidden="true"><svg aria-hidden="true" focusable="false" role="img" class="octicon octicon-file" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display: inline-block; user-select: none; vertical-align: text-bottom; overflow: visible;"><path d="M2 1.75C2 .784 2.784 0 3.75 0h6.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v9.586A1.75 1.75 0 0 1 13.25 16h-9.5A1.75 1.75 0 0 1 2 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h9.5a.25.25 0 0 0 .25-.25V6h-2.75A1.75 1.75 0 0 1 9 4.25V1.5Zm6.75.062V4.25c0 .138.112.25.25.25h2.688l-.011-.013-2.914-2.914-.013-.011Z"></path></svg></div><span class="PRIVATE_TreeView-item-content-text"><span>App.css</span></span></div></div></li><li class="PRIVATE_TreeView-item" tabindex="-1" id="src/App.js-item" role="treeitem" aria-labelledby=":re:" aria-describedby=":rf: :rg:" aria-level="2" aria-selected="false"><div class="PRIVATE_TreeView-item-container" style="--level: 2; content-visibility: auto; contain-intrinsic-size: auto 2rem;"><div style="grid-area: spacer; display: flex;"><div style="width: 100%; display: flex;"><div class="PRIVATE_TreeView-item-level-line"></div></div></div><div id=":re:" class="PRIVATE_TreeView-item-content"><div class="PRIVATE_VisuallyHidden" aria-hidden="true" id=":rf:"></div><div class="PRIVATE_TreeView-item-visual" aria-hidden="true"><svg aria-hidden="true" focusable="false" role="img" class="octicon octicon-file" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display: inline-block; user-select: none; vertical-align: text-bottom; overflow: visible;"><path d="M2 1.75C2 .784 2.784 0 3.75 0h6.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v9.586A1.75 1.75 0 0 1 13.25 16h-9.5A1.75 1.75 0 0 1 2 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h9.5a.25.25 0 0 0 .25-.25V6h-2.75A1.75 1.75 0 0 1 9 4.25V1.5Zm6.75.062V4.25c0 .138.112.25.25.25h2.688l-.011-.013-2.914-2.914-.013-.011Z"></path></svg></div><span class="PRIVATE_TreeView-item-content-text"><span>App.js</span></span></div></div></li><li class="PRIVATE_TreeView-item" tabindex="-1" id="src/App.test.js-item" role="treeitem" aria-labelledby=":rh:" aria-describedby=":ri: :rj:" aria-level="2" aria-selected="false"><div class="PRIVATE_TreeView-item-container" style="--level: 2; content-visibility: auto; contain-intrinsic-size: auto 2rem;"><div style="grid-area: spacer; display: flex;"><div style="width: 100%; display: flex;"><div class="PRIVATE_TreeView-item-level-line"></div></div></div><div id=":rh:" class="PRIVATE_TreeView-item-content"><div class="PRIVATE_VisuallyHidden" aria-hidden="true" id=":ri:"></div><div class="PRIVATE_TreeView-item-visual" aria-hidden="true"><svg aria-hidden="true" focusable="false" role="img" class="octicon octicon-file" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display: inline-block; user-select: none; vertical-align: text-bottom; overflow: visible;"><path d="M2 1.75C2 .784 2.784 0 3.75 0h6.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v9.586A1.75 1.75 0 0 1 13.25 16h-9.5A1.75 1.75 0 0 1 2 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h9.5a.25.25 0 0 0 .25-.25V6h-2.75A1.75 1.75 0 0 1 9 4.25V1.5Zm6.75.062V4.25c0 .138.112.25.25.25h2.688l-.011-.013-2.914-2.914-.013-.011Z"></path></svg></div><span class="PRIVATE_TreeView-item-content-text"><span>App.test.js</span></span></div></div></li><li class="PRIVATE_TreeView-item" tabindex="0" id="src/apiKeys.js-item" role="treeitem" aria-labelledby=":rk:" aria-describedby=":rl: :rm:" aria-level="2" aria-selected="false"><div class="PRIVATE_TreeView-item-container" style="--level: 2; content-visibility: auto; contain-intrinsic-size: auto 2rem;"><div style="grid-area: spacer; display: flex;"><div style="width: 100%; display: flex;"><div class="PRIVATE_TreeView-item-level-line"></div></div></div><div id=":rk:" class="PRIVATE_TreeView-item-content"><div class="PRIVATE_VisuallyHidden" aria-hidden="true" id=":rl:"></div><div class="PRIVATE_TreeView-item-visual" aria-hidden="true"><svg aria-hidden="true" focusable="false" role="img" class="octicon octicon-file" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display: inline-block; user-select: none; vertical-align: text-bottom; overflow: visible;"><path d="M2 1.75C2 .784 2.784 0 3.75 0h6.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v9.586A1.75 1.75 0 0 1 13.25 16h-9.5A1.75 1.75 0 0 1 2 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h9.5a.25.25 0 0 0 .25-.25V6h-2.75A1.75 1.75 0 0 1 9 4.25V1.5Zm6.75.062V4.25c0 .138.112.25.25.25h2.688l-.011-.013-2.914-2.914-.013-.011Z"></path></svg></div><span class="PRIVATE_TreeView-item-content-text"><span>apiKeys.js</span></span></div></div></li><li class="PRIVATE_TreeView-item" tabindex="-1" id="src/currentLocation.js-item" role="treeitem" aria-labelledby=":rn:" aria-describedby=":ro: :rp:" aria-level="2" aria-selected="false" aria-current="true"><div class="PRIVATE_TreeView-item-container" style="--level: 2;"><div style="grid-area: spacer; display: flex;"><div style="width: 100%; display: flex;"><div class="PRIVATE_TreeView-item-level-line"></div></div></div><div id=":rn:" class="PRIVATE_TreeView-item-content"><div class="PRIVATE_VisuallyHidden" aria-hidden="true" id=":ro:"></div><div class="PRIVATE_TreeView-item-visual" aria-hidden="true"><svg aria-hidden="true" focusable="false" role="img" class="octicon octicon-file" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display: inline-block; user-select: none; vertical-align: text-bottom; overflow: visible;"><path d="M2 1.75C2 .784 2.784 0 3.75 0h6.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v9.586A1.75 1.75 0 0 1 13.25 16h-9.5A1.75 1.75 0 0 1 2 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h9.5a.25.25 0 0 0 .25-.25V6h-2.75A1.75 1.75 0 0 1 9 4.25V1.5Zm6.75.062V4.25c0 .138.112.25.25.25h2.688l-.011-.013-2.914-2.914-.013-.011Z"></path></svg></div><span class="PRIVATE_TreeView-item-content-text"><span>currentLocation.js</span></span></div></div></li><li class="PRIVATE_TreeView-item" tabindex="-1" id="src/forcast.js-item" role="treeitem" aria-labelledby=":rq:" aria-describedby=":rr: :rs:" aria-level="2" aria-selected="false"><div class="PRIVATE_TreeView-item-container" style="--level: 2; content-visibility: auto; contain-intrinsic-size: auto 2rem;"><div style="grid-area: spacer; display: flex;"><div style="width: 100%; display: flex;"><div class="PRIVATE_TreeView-item-level-line"></div></div></div><div id=":rq:" class="PRIVATE_TreeView-item-content"><div class="PRIVATE_VisuallyHidden" aria-hidden="true" id=":rr:"></div><div class="PRIVATE_TreeView-item-visual" aria-hidden="true"><svg aria-hidden="true" focusable="false" role="img" class="octicon octicon-file" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display: inline-block; user-select: none; vertical-align: text-bottom; overflow: visible;"><path d="M2 1.75C2 .784 2.784 0 3.75 0h6.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v9.586A1.75 1.75 0 0 1 13.25 16h-9.5A1.75 1.75 0 0 1 2 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h9.5a.25.25 0 0 0 .25-.25V6h-2.75A1.75 1.75 0 0 1 9 4.25V1.5Zm6.75.062V4.25c0 .138.112.25.25.25h2.688l-.011-.013-2.914-2.914-.013-.011Z"></path></svg></div><span class="PRIVATE_TreeView-item-content-text"><span>forcast.js</span></span></div></div></li><li class="PRIVATE_TreeView-item" tabindex="-1" id="src/index.css-item" role="treeitem" aria-labelledby=":rt:" aria-describedby=":ru: :rv:" aria-level="2" aria-selected="false"><div class="PRIVATE_TreeView-item-container" style="--level: 2; content-visibility: auto; contain-intrinsic-size: auto 2rem;"><div style="grid-area: spacer; display: flex;"><div style="width: 100%; display: flex;"><div class="PRIVATE_TreeView-item-level-line"></div></div></div><div id=":rt:" class="PRIVATE_TreeView-item-content"><div class="PRIVATE_VisuallyHidden" aria-hidden="true" id=":ru:"></div><div class="PRIVATE_TreeView-item-visual" aria-hidden="true"><svg aria-hidden="true" focusable="false" role="img" class="octicon octicon-file" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display: inline-block; user-select: none; vertical-align: text-bottom; overflow: visible;"><path d="M2 1.75C2 .784 2.784 0 3.75 0h6.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v9.586A1.75 1.75 0 0 1 13.25 16h-9.5A1.75 1.75 0 0 1 2 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h9.5a.25.25 0 0 0 .25-.25V6h-2.75A1.75 1.75 0 0 1 9 4.25V1.5Zm6.75.062V4.25c0 .138.112.25.25.25h2.688l-.011-.013-2.914-2.914-.013-.011Z"></path></svg></div><span class="PRIVATE_TreeView-item-content-text"><span>index.css</span></span></div></div></li><li class="PRIVATE_TreeView-item" tabindex="-1" id="src/index.js-item" role="treeitem" aria-labelledby=":r10:" aria-describedby=":r11: :r12:" aria-level="2" aria-selected="false"><div class="PRIVATE_TreeView-item-container" style="--level: 2; content-visibility: auto; contain-intrinsic-size: auto 2rem;"><div style="grid-area: spacer; display: flex;"><div style="width: 100%; display: flex;"><div class="PRIVATE_TreeView-item-level-line"></div></div></div><div id=":r10:" class="PRIVATE_TreeView-item-content"><div class="PRIVATE_VisuallyHidden" aria-hidden="true" id=":r11:"></div><div class="PRIVATE_TreeView-item-visual" aria-hidden="true"><svg aria-hidden="true" focusable="false" role="img" class="octicon octicon-file" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display: inline-block; user-select: none; vertical-align: text-bottom; overflow: visible;"><path d="M2 1.75C2 .784 2.784 0 3.75 0h6.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v9.586A1.75 1.75 0 0 1 13.25 16h-9.5A1.75 1.75 0 0 1 2 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h9.5a.25.25 0 0 0 .25-.25V6h-2.75A1.75 1.75 0 0 1 9 4.25V1.5Zm6.75.062V4.25c0 .138.112.25.25.25h2.688l-.011-.013-2.914-2.914-.013-.011Z"></path></svg></div><span class="PRIVATE_TreeView-item-content-text"><span>index.js</span></span></div></div></li><li class="PRIVATE_TreeView-item" tabindex="-1" id="src/logo.svg-item" role="treeitem" aria-labelledby=":r13:" aria-describedby=":r14: :r15:" aria-level="2" aria-selected="false"><div class="PRIVATE_TreeView-item-container" style="--level: 2; content-visibility: auto; contain-intrinsic-size: auto 2rem;"><div style="grid-area: spacer; display: flex;"><div style="width: 100%; display: flex;"><div class="PRIVATE_TreeView-item-level-line"></div></div></div><div id=":r13:" class="PRIVATE_TreeView-item-content"><div class="PRIVATE_VisuallyHidden" aria-hidden="true" id=":r14:"></div><div class="PRIVATE_TreeView-item-visual" aria-hidden="true"><svg aria-hidden="true" focusable="false" role="img" class="octicon octicon-file" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display: inline-block; user-select: none; vertical-align: text-bottom; overflow: visible;"><path d="M2 1.75C2 .784 2.784 0 3.75 0h6.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v9.586A1.75 1.75 0 0 1 13.25 16h-9.5A1.75 1.75 0 0 1 2 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h9.5a.25.25 0 0 0 .25-.25V6h-2.75A1.75 1.75 0 0 1 9 4.25V1.5Zm6.75.062V4.25c0 .138.112.25.25.25h2.688l-.011-.013-2.914-2.914-.013-.011Z"></path></svg></div><span class="PRIVATE_TreeView-item-content-text"><span>logo.svg</span></span></div></div></li><li class="PRIVATE_TreeView-item" tabindex="-1" id="src/reportWebVitals.js-item" role="treeitem" aria-labelledby=":r16:" aria-describedby=":r17: :r18:" aria-level="2" aria-selected="false"><div class="PRIVATE_TreeView-item-container" style="--level: 2; content-visibility: auto; contain-intrinsic-size: auto 2rem;"><div style="grid-area: spacer; display: flex;"><div style="width: 100%; display: flex;"><div class="PRIVATE_TreeView-item-level-line"></div></div></div><div id=":r16:" class="PRIVATE_TreeView-item-content"><div class="PRIVATE_VisuallyHidden" aria-hidden="true" id=":r17:"></div><div class="PRIVATE_TreeView-item-visual" aria-hidden="true"><svg aria-hidden="true" focusable="false" role="img" class="octicon octicon-file" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display: inline-block; user-select: none; vertical-align: text-bottom; overflow: visible;"><path d="M2 1.75C2 .784 2.784 0 3.75 0h6.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v9.586A1.75 1.75 0 0 1 13.25 16h-9.5A1.75 1.75 0 0 1 2 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h9.5a.25.25 0 0 0 .25-.25V6h-2.75A1.75 1.75 0 0 1 9 4.25V1.5Zm6.75.062V4.25c0 .138.112.25.25.25h2.688l-.011-.013-2.914-2.914-.013-.011Z"></path></svg></div><span class="PRIVATE_TreeView-item-content-text"><span>reportWebVitals.js</span></span></div></div></li><li class="PRIVATE_TreeView-item" tabindex="-1" id="src/serviceWorker.js-item" role="treeitem" aria-labelledby=":r19:" aria-describedby=":r1a: :r1b:" aria-level="2" aria-selected="false"><div class="PRIVATE_TreeView-item-container" style="--level: 2; content-visibility: auto; contain-intrinsic-size: auto 2rem;"><div style="grid-area: spacer; display: flex;"><div style="width: 100%; display: flex;"><div class="PRIVATE_TreeView-item-level-line"></div></div></div><div id=":r19:" class="PRIVATE_TreeView-item-content"><div class="PRIVATE_VisuallyHidden" aria-hidden="true" id=":r1a:"></div><div class="PRIVATE_TreeView-item-visual" aria-hidden="true"><svg aria-hidden="true" focusable="false" role="img" class="octicon octicon-file" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display: inline-block; user-select: none; vertical-align: text-bottom; overflow: visible;"><path d="M2 1.75C2 .784 2.784 0 3.75 0h6.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v9.586A1.75 1.75 0 0 1 13.25 16h-9.5A1.75 1.75 0 0 1 2 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h9.5a.25.25 0 0 0 .25-.25V6h-2.75A1.75 1.75 0 0 1 9 4.25V1.5Zm6.75.062V4.25c0 .138.112.25.25.25h2.688l-.011-.013-2.914-2.914-.013-.011Z"></path></svg></div><span class="PRIVATE_TreeView-item-content-text"><span>serviceWorker.js</span></span></div></div></li><li class="PRIVATE_TreeView-item" tabindex="-1" id="src/setupTests.js-item" role="treeitem" aria-labelledby=":r1c:" aria-describedby=":r1d: :r1e:" aria-level="2" aria-selected="false"><div class="PRIVATE_TreeView-item-container" style="--level: 2; content-visibility: auto; contain-intrinsic-size: auto 2rem;"><div style="grid-area: spacer; display: flex;"><div style="width: 100%; display: flex;"><div class="PRIVATE_TreeView-item-level-line"></div></div></div><div id=":r1c:" class="PRIVATE_TreeView-item-content"><div class="PRIVATE_VisuallyHidden" aria-hidden="true" id=":r1d:"></div><div class="PRIVATE_TreeView-item-visual" aria-hidden="true"><svg aria-hidden="true" focusable="false" role="img" class="octicon octicon-file" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display: inline-block; user-select: none; vertical-align: text-bottom; overflow: visible;"><path d="M2 1.75C2 .784 2.784 0 3.75 0h6.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v9.586A1.75 1.75 0 0 1 13.25 16h-9.5A1.75 1.75 0 0 1 2 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h9.5a.25.25 0 0 0 .25-.25V6h-2.75A1.75 1.75 0 0 1 9 4.25V1.5Zm6.75.062V4.25c0 .138.112.25.25.25h2.688l-.011-.013-2.914-2.914-.013-.011Z"></path></svg></div><span class="PRIVATE_TreeView-item-content-text"><span>setupTests.js</span></span></div></div></li></ul></li><li class="PRIVATE_TreeView-item" tabindex="-1" id=".gitignore-item" role="treeitem" aria-labelledby=":r1f:" aria-describedby=":r1g: :r1h:" aria-level="1" aria-selected="false"><div class="PRIVATE_TreeView-item-container" style="--level: 1; content-visibility: auto; contain-intrinsic-size: auto 2rem;"><div style="grid-area: spacer; display: flex;"><div style="width: 100%; display: flex;"></div></div><div id=":r1f:" class="PRIVATE_TreeView-item-content"><div class="PRIVATE_VisuallyHidden" aria-hidden="true" id=":r1g:"></div><div class="PRIVATE_TreeView-item-visual" aria-hidden="true"><svg aria-hidden="true" focusable="false" role="img" class="octicon octicon-file" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display: inline-block; user-select: none; vertical-align: text-bottom; overflow: visible;"><path d="M2 1.75C2 .784 2.784 0 3.75 0h6.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v9.586A1.75 1.75 0 0 1 13.25 16h-9.5A1.75 1.75 0 0 1 2 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h9.5a.25.25 0 0 0 .25-.25V6h-2.75A1.75 1.75 0 0 1 9 4.25V1.5Zm6.75.062V4.25c0 .138.112.25.25.25h2.688l-.011-.013-2.914-2.914-.013-.011Z"></path></svg></div><span class="PRIVATE_TreeView-item-content-text"><span>.gitignore</span></span></div></div></li><li class="PRIVATE_TreeView-item" tabindex="-1" id="README.md-item" role="treeitem" aria-labelledby=":r1i:" aria-describedby=":r1j: :r1k:" aria-level="1" aria-selected="false"><div class="PRIVATE_TreeView-item-container" style="--level: 1; content-visibility: auto; contain-intrinsic-size: auto 2rem;"><div style="grid-area: spacer; display: flex;"><div style="width: 100%; display: flex;"></div></div><div id=":r1i:" class="PRIVATE_TreeView-item-content"><div class="PRIVATE_VisuallyHidden" aria-hidden="true" id=":r1j:"></div><div class="PRIVATE_TreeView-item-visual" aria-hidden="true"><svg aria-hidden="true" focusable="false" role="img" class="octicon octicon-file" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display: inline-block; user-select: none; vertical-align: text-bottom; overflow: visible;"><path d="M2 1.75C2 .784 2.784 0 3.75 0h6.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v9.586A1.75 1.75 0 0 1 13.25 16h-9.5A1.75 1.75 0 0 1 2 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h9.5a.25.25 0 0 0 .25-.25V6h-2.75A1.75 1.75 0 0 1 9 4.25V1.5Zm6.75.062V4.25c0 .138.112.25.25.25h2.688l-.011-.013-2.914-2.914-.013-.011Z"></path></svg></div><span class="PRIVATE_TreeView-item-content-text"><span>README.md</span></span></div></div></li><li class="PRIVATE_TreeView-item" tabindex="-1" id="package-lock.json-item" role="treeitem" aria-labelledby=":r1l:" aria-describedby=":r1m: :r1n:" aria-level="1" aria-selected="false"><div class="PRIVATE_TreeView-item-container" style="--level: 1; content-visibility: auto; contain-intrinsic-size: auto 2rem;"><div style="grid-area: spacer; display: flex;"><div style="width: 100%; display: flex;"></div></div><div id=":r1l:" class="PRIVATE_TreeView-item-content"><div class="PRIVATE_VisuallyHidden" aria-hidden="true" id=":r1m:"></div><div class="PRIVATE_TreeView-item-visual" aria-hidden="true"><svg aria-hidden="true" focusable="false" role="img" class="octicon octicon-file" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display: inline-block; user-select: none; vertical-align: text-bottom; overflow: visible;"><path d="M2 1.75C2 .784 2.784 0 3.75 0h6.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v9.586A1.75 1.75 0 0 1 13.25 16h-9.5A1.75 1.75 0 0 1 2 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h9.5a.25.25 0 0 0 .25-.25V6h-2.75A1.75 1.75 0 0 1 9 4.25V1.5Zm6.75.062V4.25c0 .138.112.25.25.25h2.688l-.011-.013-2.914-2.914-.013-.011Z"></path></svg></div><span class="PRIVATE_TreeView-item-content-text"><span>package-lock.json</span></span></div></div></li><li class="PRIVATE_TreeView-item" tabindex="-1" id="package.json-item" role="treeitem" aria-labelledby=":r1o:" aria-describedby=":r1p: :r1q:" aria-level="1" aria-selected="false"><div class="PRIVATE_TreeView-item-container" style="--level: 1; content-visibility: auto; contain-intrinsic-size: auto 2rem;"><div style="grid-area: spacer; display: flex;"><div style="width: 100%; display: flex;"></div></div><div id=":r1o:" class="PRIVATE_TreeView-item-content"><div class="PRIVATE_VisuallyHidden" aria-hidden="true" id=":r1p:"></div><div class="PRIVATE_TreeView-item-visual" aria-hidden="true"><svg aria-hidden="true" focusable="false" role="img" class="octicon octicon-file" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display: inline-block; user-select: none; vertical-align: text-bottom; overflow: visible;"><path d="M2 1.75C2 .784 2.784 0 3.75 0h6.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v9.586A1.75 1.75 0 0 1 13.25 16h-9.5A1.75 1.75 0 0 1 2 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h9.5a.25.25 0 0 0 .25-.25V6h-2.75A1.75 1.75 0 0 1 9 4.25V1.5Zm6.75.062V4.25c0 .138.112.25.25.25h2.688l-.011-.013-2.914-2.914-.013-.011Z"></path></svg></div><span class="PRIVATE_TreeView-item-content-text"><span>package.json</span></span></div></div></li></ul></nav></div></div></div></div></div></div></div><div class="Box-sc-g0xbh4-0 gMNHHu"><div role="slider" aria-label="Draggable pane splitter" aria-valuemin="256" aria-valuemax="721" aria-valuenow="0" aria-valuetext="Pane width 0 pixels" tabindex="0" class="Box-sc-g0xbh4-0 fjdBNx"></div></div></div></div><div class="Box-sc-g0xbh4-0 emFMJu"><div class="Box-sc-g0xbh4-0"></div><div class="Box-sc-g0xbh4-0 hlUAHL"><div data-selector="repos-split-pane-content" tabindex="0" class="Box-sc-g0xbh4-0 iStsmI"><div class="Box-sc-g0xbh4-0 eIgvIk"><div class="Box-sc-g0xbh4-0 eVFfWF container"><div class="px-3 pt-3 pb-0" id="StickyHeader" style="position: sticky;"><div class="Box-sc-g0xbh4-0 fywjmm"><div class="Box-sc-g0xbh4-0 dyczTK"><div class="Box-sc-g0xbh4-0 kszRgZ"><div class="Box-sc-g0xbh4-0 eTvGbF"><nav data-testid="breadcrumbs" aria-labelledby="repos-header-breadcrumb--wide-heading" id="repos-header-breadcrumb--wide" class="Box-sc-g0xbh4-0 kzRgrI"><h2 class="Heading__StyledHeading-sc-1c1dgg0-0 cgQnMS sr-only" data-testid="screen-reader-heading" id="repos-header-breadcrumb--wide-heading">Breadcrumbs</h2><ol class="Box-sc-g0xbh4-0 cmAPIB"><li class="Box-sc-g0xbh4-0 jwXCBK"><a sx="[object Object]" data-testid="breadcrumbs-repo-link" class="Link__StyledLink-sc-14289xe-0 ipyMWB" href="https://github.com/sayansarkar2001/weather_app/tree/main">weather_app</a></li><li class="Box-sc-g0xbh4-0 jwXCBK"><span aria-hidden="true" class="Text-sc-17v1xeu-0 fIsVJr">/</span><a sx="[object Object]" class="Link__StyledLink-sc-14289xe-0 jmkYvv" href="https://github.com/sayansarkar2001/weather_app/tree/main/src">src</a></li></ol></nav><div data-testid="breadcrumbs-filename" class="Box-sc-g0xbh4-0 jwXCBK"><span aria-hidden="true" class="Text-sc-17v1xeu-0 fIsVJr">/</span><h1 tabindex="-1" id="file-name-id-wide" class="Heading__StyledHeading-sc-1c1dgg0-0 diwsLq">currentLocation.js</h1></div><div aria-describedby=":r2g:"><button data-component="IconButton" type="button" aria-label="Copy path" tabindex="0" class="types__StyledButton-sc-ws60qy-0 jTAxWY" data-size="small" data-no-visuals="true"><svg aria-hidden="true" focusable="false" role="img" class="octicon octicon-copy" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display: inline-block; user-select: none; vertical-align: text-bottom; overflow: visible;"><path d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25Z"></path><path d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z"></path></svg></button></div></div></div><div class="react-code-view-header-element--wide"><div class="Box-sc-g0xbh4-0 gtBUEp"><div class="d-flex gap-2"> <button hidden="" data-testid="" data-hotkey="l,Shift+L" data-hotkey-scope="read-only-cursor-text-area"></button><button hidden="" data-hotkey="l,Shift+L"></button><button hidden="" data-testid="" data-hotkey="Mod+Alt+g" data-hotkey-scope="read-only-cursor-text-area"></button><button hidden="" data-hotkey="Mod+Alt+g"></button><button type="button" data-hotkey="b,Shift+B,Control+/ Control+b" data-no-visuals="true" class="types__StyledButton-sc-ws60qy-0 lkvrvO"><span data-component="buttonContent" class="Box-sc-g0xbh4-0 kkrdEu"><span data-component="text">Blame</span></span></button><button hidden="" data-testid="" data-hotkey="b,Shift+B,Control+/ Control+b" data-hotkey-scope="read-only-cursor-text-area"></button><button data-component="IconButton" type="button" aria-label="More file actions" class="types__StyledButton-sc-ws60qy-0 ifFWTh js-blob-dropdown-click" title="More file actions" data-testid="more-file-actions-button-nav-menu-wide" id=":r20:" aria-haspopup="true" aria-expanded="false" tabindex="0" data-no-visuals="true"><svg aria-hidden="true" focusable="false" role="img" class="octicon octicon-kebab-horizontal" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display: inline-block; user-select: none; vertical-align: text-bottom; overflow: visible;"><path d="M8 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM1.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm13 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path></svg></button> </div></div></div><div class="react-code-view-header-element--narrow"><div class="Box-sc-g0xbh4-0 gtBUEp"><div class="d-flex gap-2"> <button hidden="" data-testid="" data-hotkey="l,Shift+L" data-hotkey-scope="read-only-cursor-text-area"></button><button hidden="" data-hotkey="l,Shift+L"></button><button hidden="" data-testid="" data-hotkey="Mod+Alt+g" data-hotkey-scope="read-only-cursor-text-area"></button><button hidden="" data-hotkey="Mod+Alt+g"></button><button type="button" data-hotkey="b,Shift+B,Control+/ Control+b" data-no-visuals="true" class="types__StyledButton-sc-ws60qy-0 lkvrvO"><span data-component="buttonContent" class="Box-sc-g0xbh4-0 kkrdEu"><span data-component="text">Blame</span></span></button><button hidden="" data-testid="" data-hotkey="b,Shift+B,Control+/ Control+b" data-hotkey-scope="read-only-cursor-text-area"></button><button data-component="IconButton" type="button" aria-label="More file actions" class="types__StyledButton-sc-ws60qy-0 ifFWTh js-blob-dropdown-click" title="More file actions" data-testid="more-file-actions-button-nav-menu-narrow" id=":r22:" aria-haspopup="true" aria-expanded="false" tabindex="0" data-no-visuals="true"><svg aria-hidden="true" focusable="false" role="img" class="octicon octicon-kebab-horizontal" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display: inline-block; user-select: none; vertical-align: text-bottom; overflow: visible;"><path d="M8 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM1.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm13 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path></svg></button> </div></div></div></div></div></div></div></div><div class="Box-sc-g0xbh4-0 hVZtwF react-code-view-bottom-padding"> <div class="Box-sc-g0xbh4-0 cMYnca"></div>   </div><div class="Box-sc-g0xbh4-0 hVZtwF">   <button hidden="" data-testid="" data-hotkey="r,Shift+R" data-hotkey-scope="read-only-cursor-text-area"></button><button hidden="" data-hotkey="r,Shift+R"></button><div class="d-flex flex-column border rounded-2 mb-3 pl-1"><div class="Box-sc-g0xbh4-0 brJRqk"><h2 class="Heading__StyledHeading-sc-1c1dgg0-0 cgQnMS sr-only" data-testid="screen-reader-heading">Latest commit</h2><div data-testid="latest-commit" class="Box-sc-g0xbh4-0 bIwQEu"><div class="Box-sc-g0xbh4-0 eScEiW"><div data-testid="author-avatar" class="Box-sc-g0xbh4-0 hLLhje"><a href="https://github.com/sayansarkar2001" data-testid="avatar-icon-link" data-hovercard-url="/users/sayansarkar2001/hovercard" class="Link__StyledLink-sc-14289xe-0 dheQRw"><img data-component="Avatar" alt="sayansarkar2001" size="20" src="./apiKeys_files/95311933" data-testid="github-avatar" aria-label="sayansarkar2001" height="20" width="20" class="Avatar__StyledAvatar-sc-2lv0r8-0 kYMvPL"></a><a href="https://github.com/sayansarkar2001/weather_app/commits?author=sayansarkar2001" aria-label="commits by sayansarkar2001" data-hovercard-url="/users/sayansarkar2001/hovercard" class="Link__StyledLink-sc-14289xe-0 XuJeD">sayansarkar2001</a></div><span class=""></span></div><div class="Box-sc-g0xbh4-0 fqNQBl d-none d-sm-flex"><div class="Truncate flex-items-center f5"><span class="Text-sc-17v1xeu-0 gPDEWA Truncate-text" data-testid="latest-commit-html"><a href="https://github.com/sayansarkar2001/weather_app/commit/5bb11883cfa56f4651e78e35c4e704c2a4997ae6" class="Link--secondary" data-pjax="true" data-hovercard-url="/sayansarkar2001/weather_app/commit/5bb11883cfa56f4651e78e35c4e704c2a4997ae6/hovercard">first commit</a></span></div></div><span class="Text-sc-17v1xeu-0 gPDEWA d-flex d-sm-none fgColor-muted f6"><relative-time class="sc-bcXHqe" tense="past" datetime="2024-01-25T07:13:28.000Z" title="Jan 25, 2024, 12:43 PM GMT+5:30"><template shadowrootmode="open">6 months ago</template>Jan 25, 2024</relative-time></span></div><div class="d-flex flex-shrink-0 gap-2"><div data-testid="latest-commit-details" class="d-none d-sm-flex flex-items-center"><span class="Text-sc-17v1xeu-0 gPDEWA d-flex flex-nowrap fgColor-muted f6"><a class="Link__StyledLink-sc-14289xe-0 dheQRw Link--secondary" aria-label="Commit 5bb1188" data-hovercard-url="/sayansarkar2001/weather_app/commit/5bb11883cfa56f4651e78e35c4e704c2a4997ae6/hovercard" href="https://github.com/sayansarkar2001/weather_app/commit/5bb11883cfa56f4651e78e35c4e704c2a4997ae6">5bb1188</a>&nbsp;·&nbsp;<relative-time class="sc-bcXHqe" tense="past" datetime="2024-01-25T07:13:28.000Z" title="Jan 25, 2024, 12:43 PM GMT+5:30"><template shadowrootmode="open">6 months ago</template>Jan 25, 2024</relative-time></span></div><div class="d-flex gap-2"><h2 class="Heading__StyledHeading-sc-1c1dgg0-0 cgQnMS sr-only" data-testid="screen-reader-heading">History</h2><a class="types__StyledButton-sc-ws60qy-0 jTAxWY d-none d-lg-flex LinkButton-module__code-view-link-button--xvCGA flex-items-center fgColor-default" href="https://github.com/sayansarkar2001/weather_app/commits/main/src/currentLocation.js" data-size="small"><span data-component="buttonContent" class="Box-sc-g0xbh4-0 kkrdEu"><span data-component="leadingVisual" class="Box-sc-g0xbh4-0 trpoQ"><svg aria-hidden="true" focusable="false" role="img" class="octicon octicon-history" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display: inline-block; user-select: none; vertical-align: text-bottom; overflow: visible;"><path d="m.427 1.927 1.215 1.215a8.002 8.002 0 1 1-1.6 5.685.75.75 0 1 1 1.493-.154 6.5 6.5 0 1 0 1.18-4.458l1.358 1.358A.25.25 0 0 1 3.896 6H.25A.25.25 0 0 1 0 5.75V2.104a.25.25 0 0 1 .427-.177ZM7.75 4a.75.75 0 0 1 .75.75v2.992l2.028.812a.75.75 0 0 1-.557 1.392l-2.5-1A.751.751 0 0 1 7 8.25v-3.5A.75.75 0 0 1 7.75 4Z"></path></svg></span><span data-component="text"><span class="Text-sc-17v1xeu-0 gPDEWA fgColor-default">History</span></span></span></a><div class="d-sm-none"><button data-component="IconButton" type="button" aria-label="Open commit details" aria-pressed="false" aria-expanded="false" data-testid="latest-commit-details-toggle" data-size="small" data-no-visuals="true" class="types__StyledButton-sc-ws60qy-0 dXgAcM"><svg aria-hidden="true" focusable="false" role="img" class="octicon octicon-ellipsis" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display: inline-block; user-select: none; vertical-align: text-bottom; overflow: visible;"><path d="M0 5.75C0 4.784.784 4 1.75 4h12.5c.966 0 1.75.784 1.75 1.75v4.5A1.75 1.75 0 0 1 14.25 12H1.75A1.75 1.75 0 0 1 0 10.25ZM12 7a1 1 0 1 0 0 2 1 1 0 0 0 0-2ZM7 8a1 1 0 1 0 2 0 1 1 0 0 0-2 0ZM4 7a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"></path></svg></button></div><div class="d-flex d-lg-none"><span role="tooltip" aria-label="History" id="history-icon-button-tooltip" class="Tooltip__TooltipBase-sc-17tf59c-0 gNgnVl tooltipped-n"><a aria-describedby="history-icon-button-tooltip" class="types__StyledButton-sc-ws60qy-0 jTAxWY LinkButton-module__code-view-link-button--xvCGA flex-items-center fgColor-default" href="https://github.com/sayansarkar2001/weather_app/commits/main/src/currentLocation.js" data-size="small"><span data-component="buttonContent" class="Box-sc-g0xbh4-0 kkrdEu"><span data-component="leadingVisual" class="Box-sc-g0xbh4-0 trpoQ"><svg aria-hidden="true" focusable="false" role="img" class="octicon octicon-history" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display: inline-block; user-select: none; vertical-align: text-bottom; overflow: visible;"><path d="m.427 1.927 1.215 1.215a8.002 8.002 0 1 1-1.6 5.685.75.75 0 1 1 1.493-.154 6.5 6.5 0 1 0 1.18-4.458l1.358 1.358A.25.25 0 0 1 3.896 6H.25A.25.25 0 0 1 0 5.75V2.104a.25.25 0 0 1 .427-.177ZM7.75 4a.75.75 0 0 1 .75.75v2.992l2.028.812a.75.75 0 0 1-.557 1.392l-2.5-1A.751.751 0 0 1 7 8.25v-3.5A.75.75 0 0 1 7.75 4Z"></path></svg></span></span></a></span></div></div></div></div></div><div class="Box-sc-g0xbh4-0 iJmJly"><div class="Box-sc-g0xbh4-0 jACbi container"><div class="Box-sc-g0xbh4-0 gIJuDf react-code-size-details-banner"><div class="Box-sc-g0xbh4-0 fleZSW react-code-size-details-banner"><div class="Box-sc-g0xbh4-0 BnySK text-mono"><div title="5.76 KB" data-testid="blob-size" class="Truncate__StyledTruncate-sc-23o1d2-0 fUpWeN"><span class="Text-sc-17v1xeu-0 gPDEWA">211 lines (201 loc) · 5.76 KB</span></div></div></div></div><div class="Box-sc-g0xbh4-0 VHzRk react-blob-view-header-sticky" id="repos-sticky-header"><div class="Box-sc-g0xbh4-0 ePiodO"><div class="Box-sc-g0xbh4-0 react-blob-sticky-header"><div class="Box-sc-g0xbh4-0 kQJlnf"><div class="Box-sc-g0xbh4-0 gJICKO"><div class="Box-sc-g0xbh4-0 iZJewz"><nav data-testid="breadcrumbs" aria-labelledby="sticky-breadcrumb-heading" id="sticky-breadcrumb" class="Box-sc-g0xbh4-0 kzRgrI"><h2 class="Heading__StyledHeading-sc-1c1dgg0-0 cgQnMS sr-only" data-testid="screen-reader-heading" id="sticky-breadcrumb-heading">Breadcrumbs</h2><ol class="Box-sc-g0xbh4-0 cmAPIB"><li class="Box-sc-g0xbh4-0 jwXCBK"><a sx="[object Object]" data-testid="breadcrumbs-repo-link" class="Link__StyledLink-sc-14289xe-0 ipyMWB" href="https://github.com/sayansarkar2001/weather_app/tree/main">weather_app</a></li><li class="Box-sc-g0xbh4-0 jwXCBK"><span aria-hidden="true" class="Text-sc-17v1xeu-0 cYjMDB">/</span><a sx="[object Object]" class="Link__StyledLink-sc-14289xe-0 jmkYvv" href="https://github.com/sayansarkar2001/weather_app/tree/main/src">src</a></li></ol></nav><div data-testid="breadcrumbs-filename" class="Box-sc-g0xbh4-0 jwXCBK"><span aria-hidden="true" class="Text-sc-17v1xeu-0 cYjMDB">/</span><h1 tabindex="-1" id="sticky-file-name-id" class="Heading__StyledHeading-sc-1c1dgg0-0 jAEDJk">currentLocation.js</h1></div></div><button type="button" data-size="small" class="types__StyledButton-sc-ws60qy-0 kaFZev" style="--button-color: fg.default;"><span data-component="buttonContent" class="Box-sc-g0xbh4-0 kkrdEu"><span data-component="leadingVisual" class="Box-sc-g0xbh4-0 trpoQ"><svg aria-hidden="true" focusable="false" role="img" class="octicon octicon-arrow-up" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display: inline-block; user-select: none; vertical-align: text-bottom; overflow: visible;"><path d="M3.47 7.78a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0l4.25 4.25a.751.751 0 0 1-.018 1.042.751.751 0 0 1-1.042.018L9 4.81v7.44a.75.75 0 0 1-1.5 0V4.81L4.53 7.78a.75.75 0 0 1-1.06 0Z"></path></svg></span><span data-component="text">Top</span></span></button></div></div></div><div class="Box-sc-g0xbh4-0 jfjHXm"><h2 class="Heading__StyledHeading-sc-1c1dgg0-0 cgQnMS sr-only" data-testid="screen-reader-heading">File metadata and controls</h2><div class="Box-sc-g0xbh4-0 bfkNRF"><ul aria-label="File view" class="SegmentedControl__SegmentedControlList-sc-1rzig82-0 huxtnT"><li class="Box-sc-g0xbh4-0 fXBLEV"><button aria-current="true" type="button" data-hotkey="Control+/ Control+c" class="SegmentedControlButton__SegmentedControlButtonStyled-sc-8lkgxl-0 dAjliH"><span class="segmentedControl-content"><div class="Box-sc-g0xbh4-0 segmentedControl-text">Code</div></span></button></li><li class="Box-sc-g0xbh4-0 gMPsNT"><button aria-current="false" type="button" data-hotkey="b,Shift+B,Control+/ Control+b" class="SegmentedControlButton__SegmentedControlButtonStyled-sc-8lkgxl-0 fIktcg"><span class="segmentedControl-content"><div class="Box-sc-g0xbh4-0 segmentedControl-text">Blame</div></span></button></li></ul><button hidden="" data-testid="" data-hotkey="Control+/ Control+c" data-hotkey-scope="read-only-cursor-text-area"></button><button hidden="" data-testid="" data-hotkey="b,Shift+B,Control+/ Control+b" data-hotkey-scope="read-only-cursor-text-area"></button><div class="Box-sc-g0xbh4-0 fleZSW react-code-size-details-in-header"><div class="Box-sc-g0xbh4-0 BnySK text-mono"><div title="5.76 KB" data-testid="blob-size" class="Truncate__StyledTruncate-sc-23o1d2-0 fUpWeN"><span class="Text-sc-17v1xeu-0 gPDEWA">211 lines (201 loc) · 5.76 KB</span></div></div></div></div><div class="Box-sc-g0xbh4-0 iBylDf"><button hidden="" data-testid="" data-hotkey="Control+Shift+&gt;" data-hotkey-scope="read-only-cursor-text-area"></button><button hidden="" data-hotkey="Control+Shift+&gt;"></button><button hidden="" data-testid="" data-hotkey="Control+Shift+&lt;" data-hotkey-scope="read-only-cursor-text-area"></button><button hidden="" data-hotkey="Control+Shift+&lt;"></button><div class="Box-sc-g0xbh4-0 kSGBPx react-blob-header-edit-and-raw-actions"><div class="ButtonGroup-sc-1gxhls1-0 cjbBGq"><a href="https://github.com/sayansarkar2001/weather_app/raw/main/src/currentLocation.js" data-testid="raw-button" data-hotkey="Control+/ Control+r" data-size="small" data-no-visuals="true" class="types__StyledButton-sc-ws60qy-0 lcvTKe"><span data-component="buttonContent" class="Box-sc-g0xbh4-0 kkrdEu"><span data-component="text">Raw</span></span></a><button data-component="IconButton" type="button" aria-label="Copy raw content" data-testid="copy-raw-button" data-hotkey="Control+Shift+C" data-size="small" data-no-visuals="true" class="types__StyledButton-sc-ws60qy-0 gsAScr"><svg aria-hidden="true" focusable="false" role="img" class="octicon octicon-copy" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display: inline-block; user-select: none; vertical-align: text-bottom; overflow: visible;"><path d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25Z"></path><path d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z"></path></svg></button><span role="tooltip" aria-label="Download raw file" id=":r26:" class="Tooltip__TooltipBase-sc-17tf59c-0 gNgnVl tooltipped-n"><button data-component="IconButton" type="button" aria-label="Download raw content" data-testid="download-raw-button" data-hotkey="Control+Shift+S" data-size="small" data-no-visuals="true" class="types__StyledButton-sc-ws60qy-0 ipOGIj"><svg aria-hidden="true" focusable="false" role="img" class="octicon octicon-download" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display: inline-block; user-select: none; vertical-align: text-bottom; overflow: visible;"><path d="M2.75 14A1.75 1.75 0 0 1 1 12.25v-2.5a.75.75 0 0 1 1.5 0v2.5c0 .138.112.25.25.25h10.5a.25.25 0 0 0 .25-.25v-2.5a.75.75 0 0 1 1.5 0v2.5A1.75 1.75 0 0 1 13.25 14Z"></path><path d="M7.25 7.689V2a.75.75 0 0 1 1.5 0v5.689l1.97-1.969a.749.749 0 1 1 1.06 1.06l-3.25 3.25a.749.749 0 0 1-1.06 0L4.22 6.78a.749.749 0 1 1 1.06-1.06l1.97 1.969Z"></path></svg></button></span></div><button hidden="" data-testid="raw-button-shortcut" data-hotkey="Control+/ Control+r" data-hotkey-scope="read-only-cursor-text-area"></button><button hidden="" data-testid="copy-raw-button-shortcut" data-hotkey="Control+Shift+C" data-hotkey-scope="read-only-cursor-text-area"></button><button hidden="" data-testid="download-raw-button-shortcut" data-hotkey="Control+Shift+S" data-hotkey-scope="read-only-cursor-text-area"></button><div class="ButtonGroup-sc-1gxhls1-0 cjbBGq"><span role="tooltip" aria-label="You must be signed in to make or propose changes" id=":r27:" class="Tooltip__TooltipBase-sc-17tf59c-0 gNgnVl tooltipped-nw"><button data-component="IconButton" type="button" aria-label="Edit file" class="types__StyledButton-sc-ws60qy-0 iGzHek btn" aria-disabled="true" data-size="small" data-no-visuals="true"><svg aria-hidden="true" focusable="false" role="img" class="octicon octicon-pencil" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display: inline-block; user-select: none; vertical-align: text-bottom; overflow: visible;"><path d="M11.013 1.427a1.75 1.75 0 0 1 2.474 0l1.086 1.086a1.75 1.75 0 0 1 0 2.474l-8.61 8.61c-.21.21-.47.364-.756.445l-3.251.93a.75.75 0 0 1-.927-.928l.929-3.25c.081-.286.235-.547.445-.758l8.61-8.61Zm.176 4.823L9.75 4.81l-6.286 6.287a.253.253 0 0 0-.064.108l-.558 1.953 1.953-.558a.253.253 0 0 0 .108-.064Zm1.238-3.763a.25.25 0 0 0-.354 0L10.811 3.75l1.439 1.44 1.263-1.263a.25.25 0 0 0 0-.354Z"></path></svg></button></span><button data-component="IconButton" type="button" aria-label="More edit options" data-testid="more-edit-button" id=":r28:" aria-haspopup="true" aria-expanded="false" tabindex="0" data-size="small" data-no-visuals="true" class="types__StyledButton-sc-ws60qy-0 gsAScr"><svg aria-hidden="true" focusable="false" role="img" class="octicon octicon-triangle-down" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display: inline-block; user-select: none; vertical-align: text-bottom; overflow: visible;"><path d="m4.427 7.427 3.396 3.396a.25.25 0 0 0 .354 0l3.396-3.396A.25.25 0 0 0 11.396 7H4.604a.25.25 0 0 0-.177.427Z"></path></svg></button></div></div><span role="tooltip" aria-label="Open symbols panel" id=":r2a:" class="Tooltip__TooltipBase-sc-17tf59c-0 gNgnVl tooltipped-nw"><button data-component="IconButton" type="button" aria-label="Symbols" aria-pressed="false" aria-expanded="false" aria-controls="symbols-pane" class="types__StyledButton-sc-ws60qy-0 jiwwtK" data-hotkey="Control+i" data-testid="symbols-button" id="symbols-button" data-size="small" data-no-visuals="true"><svg aria-hidden="true" focusable="false" role="img" class="octicon octicon-code-square" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display: inline-block; user-select: none; vertical-align: text-bottom; overflow: visible;"><path d="M0 1.75C0 .784.784 0 1.75 0h12.5C15.216 0 16 .784 16 1.75v12.5A1.75 1.75 0 0 1 14.25 16H1.75A1.75 1.75 0 0 1 0 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25V1.75a.25.25 0 0 0-.25-.25Zm7.47 3.97a.75.75 0 0 1 1.06 0l2 2a.75.75 0 0 1 0 1.06l-2 2a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734L10.69 8 9.22 6.53a.75.75 0 0 1 0-1.06ZM6.78 6.53 5.31 8l1.47 1.47a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215l-2-2a.75.75 0 0 1 0-1.06l2-2a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042Z"></path></svg></button></span><div class="Box-sc-g0xbh4-0 react-blob-header-edit-and-raw-actions-combined"><button data-component="IconButton" type="button" aria-label="Edit and raw actions" class="types__StyledButton-sc-ws60qy-0 fXPhKS js-blob-dropdown-click" title="More file actions" data-testid="more-file-actions-button" id=":r2b:" aria-haspopup="true" aria-expanded="false" tabindex="0" data-size="small" data-no-visuals="true"><svg aria-hidden="true" focusable="false" role="img" class="octicon octicon-kebab-horizontal" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display: inline-block; user-select: none; vertical-align: text-bottom; overflow: visible;"><path d="M8 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM1.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm13 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path></svg></button></div></div></div></div><div></div></div><div class="Box-sc-g0xbh4-0 ytOJl"><section aria-labelledby="file-name-id-wide file-name-id-mobile" class="Box-sc-g0xbh4-0 jWnGGx"><div class="Box-sc-g0xbh4-0 TCenl"><div id="highlighted-line-menu-positioner" class="position-relative"><div id="copilot-button-positioner" class="Box-sc-g0xbh4-0 cluMzC"><div class="Box-sc-g0xbh4-0 eRkHwF"><div class="Box-sc-g0xbh4-0 cVawVl"><div class="Box-sc-g0xbh4-0 hoKSJe"><div aria-hidden="true" data-testid="navigation-cursor" class="Box-sc-g0xbh4-0 code-navigation-cursor" style="top: 0px; left: 92px;"> </div><button hidden="" data-testid="NavigationCursorEnter" data-hotkey="Control+Enter" data-hotkey-scope="read-only-cursor-text-area"></button><button hidden="" data-testid="NavigationCursorSetHighlightedLine" data-hotkey="Shift+J" data-hotkey-scope="read-only-cursor-text-area"></button><button hidden="" data-testid="NavigationCursorSetHighlightAndExpandMenu" data-hotkey="Alt+Shift+C,Alt+Shift+Ç" data-hotkey-scope="read-only-cursor-text-area"></button><button hidden="" data-testid="NavigationCursorPageDown" data-hotkey="PageDown" data-hotkey-scope="read-only-cursor-text-area"></button><button hidden="" data-testid="NavigationCursorPageUp" data-hotkey="PageUp" data-hotkey-scope="read-only-cursor-text-area"></button><button hidden="" data-testid="" data-hotkey="/" data-hotkey-scope="read-only-cursor-text-area"></button></div></div><textarea id="read-only-cursor-text-area" data-testid="read-only-cursor-text-area" aria-label="file content" aria-readonly="true" inputmode="none" tabindex="0" aria-multiline="true" aria-haspopup="false" data-gramm="false" data-gramm_editor="false" data-enable-grammarly="false" spellcheck="false" autocorrect="off" autocapitalize="off" autocomplete="off" data-ms-editor="false" class="react-blob-textarea react-blob-print-hide" style="resize: none; margin-top: -2px; padding-left: 92px; padding-right: 70px; width: 100%; background-color: unset; box-sizing: border-box; color: transparent; position: absolute; border: none; tab-size: 8; outline: none; overflow: auto hidden; height: 4240px; font-size: 12px; line-height: 20px; overflow-wrap: normal; overscroll-behavior-x: none; white-space: pre; z-index: 1;">import React from "react";
import apiKeys from "./apiKeys";
import Clock from "react-live-clock";
import Forcast from "./forcast";
import loader from "./images/WeatherIcons.gif";
import ReactAnimatedWeather from "react-animated-weather";
const dateBuilder = (d) =&gt; {
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = days[d.getDay()];
  let date = d.getDate();
  let month = months[d.getMonth()];
  let year = d.getFullYear();

  return `${day}, ${date} ${month} ${year}`;
};
const defaults = {
  color: "white",
  size: 112,
  animate: true,
};
class Weather extends React.Component {
  state = {
    lat: undefined,
    lon: undefined,
    errorMessage: undefined,
    temperatureC: undefined,
    temperatureF: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    icon: "CLEAR_DAY",
    sunrise: undefined,
    sunset: undefined,
    errorMsg: undefined,
  };

  componentDidMount() {
    if (navigator.geolocation) {
      this.getPosition()
        //If user allow location service then will fetch data &amp; send it to get-weather function.
        .then((position) =&gt; {
          this.getWeather(position.coords.latitude, position.coords.longitude);
        })
        .catch((err) =&gt; {
          //If user denied location service then standard location weather will le shown on basis of latitude &amp; latitude.
          this.getWeather(28.67, 77.22);
          alert(
            "You have disabled location service. Allow 'This APP' to access your location. Your current location will be used for calculating Real time weather."
          );
        });
    } else {
      alert("Geolocation not available");
    }

    this.timerID = setInterval(
      () =&gt; this.getWeather(this.state.lat, this.state.lon),
      600000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  // tick = () =&gt; {
  //   this.getPosition()
  //   .then((position) =&gt; {
  //     this.getWeather(position.coords.latitude, position.coords.longitude)
  //   })
  //   .catch((err) =&gt; {
  //     this.setState({ errorMessage: err.message });
  //   });
  // }

  getPosition = (options) =&gt; {
    return new Promise(function (resolve, reject) {
      navigator.geolocation.getCurrentPosition(resolve, reject, options);
    });
  };
  getWeather = async (lat, lon) =&gt; {
    const api_call = await fetch(
      `${apiKeys.base}weather?lat=${lat}&amp;lon=${lon}&amp;units=metric&amp;APPID=${apiKeys.key}`
    );
    const data = await api_call.json();
    this.setState({
      lat: lat,
      lon: lon,
      city: data.name,
      temperatureC: Math.round(data.main.temp),
      temperatureF: Math.round(data.main.temp * 1.8 + 32),
      humidity: data.main.humidity,
      main: data.weather[0].main,
      country: data.sys.country,
      // sunrise: this.getTimeFromUnixTimeStamp(data.sys.sunrise),

      // sunset: this.getTimeFromUnixTimeStamp(data.sys.sunset),
    });
    switch (this.state.main) {
      case "Haze":
        this.setState({ icon: "CLEAR_DAY" });
        break;
      case "Clouds":
        this.setState({ icon: "CLOUDY" });
        break;
      case "Rain":
        this.setState({ icon: "RAIN" });
        break;
      case "Snow":
        this.setState({ icon: "SNOW" });
        break;
      case "Dust":
        this.setState({ icon: "WIND" });
        break;
      case "Drizzle":
        this.setState({ icon: "SLEET" });
        break;
      case "Fog":
        this.setState({ icon: "FOG" });
        break;
      case "Smoke":
        this.setState({ icon: "FOG" });
        break;
      case "Tornado":
        this.setState({ icon: "WIND" });
        break;
      default:
        this.setState({ icon: "CLEAR_DAY" });
    }
  };

  render() {
    if (this.state.temperatureC) {
      return (
        &lt;React.Fragment&gt;
          &lt;div className="city"&gt;
            &lt;div className="title"&gt;
              &lt;h2&gt;{this.state.city}&lt;/h2&gt;
              &lt;h3&gt;{this.state.country}&lt;/h3&gt;
            &lt;/div&gt;
            &lt;div className="mb-icon"&gt;
              {" "}
              &lt;ReactAnimatedWeather
                icon={this.state.icon}
                color={defaults.color}
                size={defaults.size}
                animate={defaults.animate}
              /&gt;
              &lt;p&gt;{this.state.main}&lt;/p&gt;
            &lt;/div&gt;
            &lt;div className="date-time"&gt;
              &lt;div className="dmy"&gt;
                &lt;div id="txt"&gt;&lt;/div&gt;
                &lt;div className="current-time"&gt;
                  &lt;Clock format="HH:mm:ss" interval={1000} ticking={true} /&gt;
                &lt;/div&gt;
                &lt;div className="current-date"&gt;{dateBuilder(new Date())}&lt;/div&gt;
              &lt;/div&gt;
              &lt;div className="temperature"&gt;
                &lt;p&gt;
                  {this.state.temperatureC}°&lt;span&gt;C&lt;/span&gt;
                &lt;/p&gt;
                {/* &lt;span className="slash"&gt;/&lt;/span&gt;
                {this.state.temperatureF} &amp;deg;F */}
              &lt;/div&gt;
            &lt;/div&gt;
          &lt;/div&gt;
          &lt;Forcast icon={this.state.icon} weather={this.state.main} /&gt;
        &lt;/React.Fragment&gt;
      );
    } else {
      return (
        &lt;React.Fragment&gt;
          &lt;img src={loader} style={{ width: "50%", WebkitUserDrag: "none" }} /&gt;
          &lt;h3 style={{ color: "white", fontSize: "22px", fontWeight: "600" }}&gt;
            Detecting your location
          &lt;/h3&gt;
          &lt;h3 style={{ color: "white", marginTop: "10px" }}&gt;
            Your current location wil be displayed on the App &lt;br&gt;&lt;/br&gt; &amp; used
            for calculating Real time weather.
          &lt;/h3&gt;
        &lt;/React.Fragment&gt;
      );
    }
  }
}

export default Weather;</textarea><button hidden="" data-testid="" data-hotkey="Alt+F1,Control+Alt+˙,Control+Alt+h" data-hotkey-scope="read-only-cursor-text-area"></button><div class="Box-sc-g0xbh4-0 cXpbTk"><div tabindex="0" class="Box-sc-g0xbh4-0 hHjsH"><div class="Box-sc-g0xbh4-0 erwvLl react-code-file-contents" role="presentation" aria-hidden="true" data-tab-size="8" data-testid="code-lines-container" data-paste-markdown-skip="true" data-hpc="true" style="height: 4220px;"><div class="react-line-numbers" style="pointer-events: auto; height: 4220px; position: relative; z-index: 2;"><div data-line-number="1" class="react-line-number react-code-text" style="padding-right: 16px;">1</div><div data-line-number="2" class="react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(20px);">2</div><div data-line-number="3" class="react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(40px);">3</div><div data-line-number="4" class="react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(60px);">4</div><div data-line-number="5" class="react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(80px);">5</div><div data-line-number="6" class="react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(100px);">6</div><div data-line-number="7" class="react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(120px);">7<span class="Box-sc-g0xbh4-0 hXUKEK"><div aria-label="Collapse code section" role="button" class="Box-sc-g0xbh4-0 cXzIIR"><svg aria-hidden="true" focusable="false" role="img" class="Octicon-sc-9kayk9-0" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display: inline-block; user-select: none; vertical-align: text-bottom; overflow: visible;"><path d="M12.78 5.22a.749.749 0 0 1 0 1.06l-4.25 4.25a.749.749 0 0 1-1.06 0L3.22 6.28a.749.749 0 1 1 1.06-1.06L8 8.939l3.72-3.719a.749.749 0 0 1 1.06 0Z"></path></svg></div></span></div><div data-line-number="8" class="child-of-line-6  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(140px);">8</div><div data-line-number="9" class="child-of-line-6  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(160px);">9</div><div data-line-number="10" class="child-of-line-6  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(180px);">10</div><div data-line-number="11" class="child-of-line-6  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(200px);">11</div><div data-line-number="12" class="child-of-line-6  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(220px);">12</div><div data-line-number="13" class="child-of-line-6  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(240px);">13</div><div data-line-number="14" class="child-of-line-6  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(260px);">14</div><div data-line-number="15" class="child-of-line-6  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(280px);">15</div><div data-line-number="16" class="child-of-line-6  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(300px);">16</div><div data-line-number="17" class="child-of-line-6  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(320px);">17</div><div data-line-number="18" class="child-of-line-6  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(340px);">18</div><div data-line-number="19" class="child-of-line-6  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(360px);">19</div><div data-line-number="20" class="child-of-line-6  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(380px);">20</div><div data-line-number="21" class="child-of-line-6  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(400px);">21</div><div data-line-number="22" class="child-of-line-6  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(420px);">22</div><div data-line-number="23" class="child-of-line-6  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(440px);">23</div><div data-line-number="24" class="child-of-line-6  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(460px);">24</div><div data-line-number="25" class="child-of-line-6  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(480px);">25</div><div data-line-number="26" class="child-of-line-6  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(500px);">26</div><div data-line-number="27" class="child-of-line-6  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(520px);">27</div><div data-line-number="28" class="child-of-line-6  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(540px);">28</div><div data-line-number="29" class="child-of-line-6  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(560px);">29</div><div data-line-number="30" class="child-of-line-6  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(580px);">30</div><div data-line-number="31" class="child-of-line-6  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(600px);">31</div><div data-line-number="32" class="child-of-line-6  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(620px);">32</div><div data-line-number="33" class="child-of-line-6  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(640px);">33</div><div data-line-number="34" class="child-of-line-6  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(660px);">34</div><div data-line-number="35" class="child-of-line-6  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(680px);">35</div><div data-line-number="36" class="child-of-line-6  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(700px);">36</div><div data-line-number="37" class="child-of-line-6  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(720px);">37</div><div data-line-number="38" class="react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(740px);">38</div><div data-line-number="39" class="react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(760px);">39</div><div data-line-number="40" class="react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(780px);">40</div><div data-line-number="41" class="react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(800px);">41</div><div data-line-number="42" class="react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(820px);">42</div><div data-line-number="43" class="react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(840px);">43</div><div data-line-number="44" class="react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(860px);">44<span class="Box-sc-g0xbh4-0 hXUKEK"><div aria-label="Collapse code section" role="button" class="Box-sc-g0xbh4-0 cXzIIR"><svg aria-hidden="true" focusable="false" role="img" class="Octicon-sc-9kayk9-0" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display: inline-block; user-select: none; vertical-align: text-bottom; overflow: visible;"><path d="M12.78 5.22a.749.749 0 0 1 0 1.06l-4.25 4.25a.749.749 0 0 1-1.06 0L3.22 6.28a.749.749 0 1 1 1.06-1.06L8 8.939l3.72-3.719a.749.749 0 0 1 1.06 0Z"></path></svg></div></span></div><div data-line-number="45" class="child-of-line-43  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(880px);">45</div><div data-line-number="46" class="child-of-line-43  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(900px);">46</div><div data-line-number="47" class="child-of-line-43  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(920px);">47</div><div data-line-number="48" class="child-of-line-43  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(940px);">48</div><div data-line-number="49" class="child-of-line-43  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(960px);">49</div><div data-line-number="50" class="child-of-line-43  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(980px);">50</div><div data-line-number="51" class="child-of-line-43  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(1000px);">51</div><div data-line-number="52" class="child-of-line-43  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(1020px);">52</div><div data-line-number="53" class="child-of-line-43  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(1040px);">53</div><div data-line-number="54" class="child-of-line-43  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(1060px);">54</div><div data-line-number="55" class="child-of-line-43  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(1080px);">55</div><div data-line-number="56" class="child-of-line-43  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(1100px);">56</div><div data-line-number="57" class="child-of-line-43  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(1120px);">57</div><div data-line-number="58" class="child-of-line-43  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(1140px);">58</div><div data-line-number="59" class="child-of-line-43  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(1160px);">59</div><div data-line-number="60" class="child-of-line-43  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(1180px);">60</div><div data-line-number="61" class="child-of-line-43  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(1200px);">61<span class="Box-sc-g0xbh4-0 hXUKEK"><div aria-label="Collapse code section" role="button" class="Box-sc-g0xbh4-0 cXzIIR"><svg aria-hidden="true" focusable="false" role="img" class="Octicon-sc-9kayk9-0" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display: inline-block; user-select: none; vertical-align: text-bottom; overflow: visible;"><path d="M12.78 5.22a.749.749 0 0 1 0 1.06l-4.25 4.25a.749.749 0 0 1-1.06 0L3.22 6.28a.749.749 0 1 1 1.06-1.06L8 8.939l3.72-3.719a.749.749 0 0 1 1.06 0Z"></path></svg></div></span></div><div data-line-number="62" class="child-of-line-43 child-of-line-60  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(1220px);">62</div><div data-line-number="63" class="child-of-line-43 child-of-line-60  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(1240px);">63</div><div data-line-number="64" class="child-of-line-43 child-of-line-60  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(1260px);">64</div><div data-line-number="65" class="child-of-line-43 child-of-line-60  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(1280px);">65</div><div data-line-number="66" class="child-of-line-43 child-of-line-60  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(1300px);">66</div><div data-line-number="67" class="child-of-line-43 child-of-line-60  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(1320px);">67</div><div data-line-number="68" class="child-of-line-43 child-of-line-60  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(1340px);">68</div><div data-line-number="69" class="child-of-line-43 child-of-line-60  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(1360px);">69</div><div data-line-number="70" class="child-of-line-43 child-of-line-60  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(1380px);">70</div><div data-line-number="71" class="child-of-line-43 child-of-line-60  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(1400px);">71</div><div data-line-number="72" class="child-of-line-43 child-of-line-60  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(1420px);">72</div><div data-line-number="73" class="child-of-line-43 child-of-line-60  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(1440px);">73</div><div data-line-number="74" class="child-of-line-43 child-of-line-60  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(1460px);">74</div><div data-line-number="75" class="child-of-line-43 child-of-line-60  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(1480px);">75</div><div data-line-number="76" class="child-of-line-43 child-of-line-60  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(1500px);">76</div><div data-line-number="77" class="child-of-line-43 child-of-line-60  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(1520px);">77</div><div data-line-number="78" class="child-of-line-43 child-of-line-60  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(1540px);">78</div><div data-line-number="79" class="child-of-line-43 child-of-line-60  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(1560px);">79</div><div data-line-number="80" class="child-of-line-43 child-of-line-60  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(1580px);">80</div><div data-line-number="81" class="child-of-line-43 child-of-line-60  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(1600px);">81</div><div data-line-number="82" class="child-of-line-43 child-of-line-60  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(1620px);">82</div><div data-line-number="83" class="child-of-line-43  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(1640px);">83</div><div data-line-number="84" class="child-of-line-43  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(1660px);">84</div><div data-line-number="85" class="child-of-line-43  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(1680px);">85</div><div data-line-number="86" class="child-of-line-43  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(1700px);">86</div><div data-line-number="87" class="child-of-line-43  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(1720px);">87</div><div data-line-number="88" class="child-of-line-43  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(1740px);">88</div><div data-line-number="89" class="child-of-line-43  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(1760px);">89</div><div data-line-number="90" class="child-of-line-43  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(1780px);">90</div><div data-line-number="91" class="child-of-line-43  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(1800px);">91</div><div data-line-number="92" class="child-of-line-43  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(1820px);">92</div><div data-line-number="93" class="child-of-line-43  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(1840px);">93</div><div data-line-number="94" class="child-of-line-43  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(1860px);">94</div><div data-line-number="95" class="child-of-line-43  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(1880px);">95</div><div data-line-number="96" class="child-of-line-43  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(1900px);">96</div><div data-line-number="97" class="child-of-line-43  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(1920px);">97</div><div data-line-number="98" class="child-of-line-43  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(1940px);">98</div><div data-line-number="99" class="child-of-line-43  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(1960px);">99</div><div data-line-number="100" class="child-of-line-43  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(1980px);">100</div><div data-line-number="101" class="child-of-line-43  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(2000px);">101</div><div data-line-number="102" class="child-of-line-43  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(2020px);">102</div><div data-line-number="103" class="child-of-line-43  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(2040px);">103</div><div data-line-number="104" class="child-of-line-43  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(2060px);">104</div><div data-line-number="105" class="child-of-line-43  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(2080px);">105</div><div data-line-number="106" class="child-of-line-43  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(2100px);">106</div><div data-line-number="107" class="child-of-line-43  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(2120px);">107</div><div data-line-number="108" class="child-of-line-43  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(2140px);">108</div><div data-line-number="109" class="child-of-line-43  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(2160px);">109</div><div data-line-number="110" class="child-of-line-43  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(2180px);">110</div><div data-line-number="111" class="child-of-line-43  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(2200px);">111</div><div data-line-number="112" class="child-of-line-43  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(2220px);">112</div><div data-line-number="113" class="child-of-line-43  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(2240px);">113</div><div data-line-number="114" class="child-of-line-43  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(2260px);">114</div><div data-line-number="115" class="child-of-line-43  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(2280px);">115</div><div data-line-number="116" class="child-of-line-43  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(2300px);">116</div><div data-line-number="117" class="child-of-line-43  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(2320px);">117</div><div data-line-number="118" class="child-of-line-43  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(2340px);">118</div><div data-line-number="119" class="child-of-line-43  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(2360px);">119</div><div data-line-number="120" class="child-of-line-43  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(2380px);">120</div><div data-line-number="121" class="child-of-line-43  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(2400px);">121</div><div data-line-number="138" class="child-of-line-43  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(2740px);">138</div><div data-line-number="139" class="child-of-line-43  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(2760px);">139</div><div data-line-number="140" class="child-of-line-43  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(2780px);">140</div><div data-line-number="141" class="child-of-line-43  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(2800px);">141</div><div data-line-number="142" class="child-of-line-43  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(2820px);">142</div><div data-line-number="143" class="child-of-line-43  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(2840px);">143</div><div data-line-number="144" class="child-of-line-43  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(2860px);">144</div><div data-line-number="145" class="child-of-line-43  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(2880px);">145</div><div data-line-number="146" class="child-of-line-43  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(2900px);">146</div><div data-line-number="147" class="child-of-line-43  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(2920px);">147</div><div data-line-number="148" class="child-of-line-43  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(2940px);">148</div><div data-line-number="149" class="child-of-line-43  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(2960px);">149</div><div data-line-number="150" class="child-of-line-43  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(2980px);">150</div><div data-line-number="151" class="child-of-line-43  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(3000px);">151</div><div data-line-number="152" class="child-of-line-43  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(3020px);">152</div><div data-line-number="153" class="child-of-line-43  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(3040px);">153</div><div data-line-number="154" class="child-of-line-43  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(3060px);">154</div><div data-line-number="155" class="child-of-line-43  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(3080px);">155<span class="Box-sc-g0xbh4-0 hXUKEK"><div aria-label="Collapse code section" role="button" class="Box-sc-g0xbh4-0 cXzIIR"><svg aria-hidden="true" focusable="false" role="img" class="Octicon-sc-9kayk9-0" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display: inline-block; user-select: none; vertical-align: text-bottom; overflow: visible;"><path d="M12.78 5.22a.749.749 0 0 1 0 1.06l-4.25 4.25a.749.749 0 0 1-1.06 0L3.22 6.28a.749.749 0 1 1 1.06-1.06L8 8.939l3.72-3.719a.749.749 0 0 1 1.06 0Z"></path></svg></div></span></div><div data-line-number="156" class="child-of-line-43 child-of-line-154  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(3100px);">156</div><div data-line-number="157" class="child-of-line-43 child-of-line-154  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(3120px);">157</div><div data-line-number="158" class="child-of-line-43 child-of-line-154  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(3140px);">158</div><div data-line-number="159" class="child-of-line-43 child-of-line-154  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(3160px);">159</div><div data-line-number="160" class="child-of-line-43 child-of-line-154  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(3180px);">160</div><div data-line-number="161" class="child-of-line-43 child-of-line-154  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(3200px);">161</div><div data-line-number="162" class="child-of-line-43 child-of-line-154  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(3220px);">162</div><div data-line-number="163" class="child-of-line-43 child-of-line-154  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(3240px);">163</div><div data-line-number="164" class="child-of-line-43 child-of-line-154  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(3260px);">164</div><div data-line-number="165" class="child-of-line-43 child-of-line-154  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(3280px);">165</div><div data-line-number="166" class="child-of-line-43 child-of-line-154  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(3300px);">166</div><div data-line-number="167" class="child-of-line-43 child-of-line-154  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(3320px);">167</div><div data-line-number="168" class="child-of-line-43 child-of-line-154  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(3340px);">168</div><div data-line-number="169" class="child-of-line-43 child-of-line-154  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(3360px);">169</div><div data-line-number="170" class="child-of-line-43 child-of-line-154  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(3380px);">170</div><div data-line-number="171" class="child-of-line-43 child-of-line-154  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(3400px);">171</div><div data-line-number="172" class="child-of-line-43 child-of-line-154  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(3420px);">172</div><div data-line-number="173" class="child-of-line-43 child-of-line-154  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(3440px);">173</div><div data-line-number="174" class="child-of-line-43 child-of-line-154  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(3460px);">174</div><div data-line-number="175" class="child-of-line-43 child-of-line-154  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(3480px);">175</div><div data-line-number="176" class="child-of-line-43 child-of-line-154  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(3500px);">176</div><div data-line-number="177" class="child-of-line-43 child-of-line-154  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(3520px);">177</div><div data-line-number="178" class="child-of-line-43 child-of-line-154  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(3540px);">178</div><div data-line-number="179" class="child-of-line-43 child-of-line-154  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(3560px);">179</div><div data-line-number="180" class="child-of-line-43 child-of-line-154  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(3580px);">180</div><div data-line-number="181" class="child-of-line-43 child-of-line-154  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(3600px);">181</div><div data-line-number="182" class="child-of-line-43 child-of-line-154  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(3620px);">182</div><div data-line-number="183" class="child-of-line-43 child-of-line-154  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(3640px);">183</div><div data-line-number="184" class="child-of-line-43 child-of-line-154  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(3660px);">184</div><div data-line-number="185" class="child-of-line-43 child-of-line-154  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(3680px);">185</div><div data-line-number="186" class="child-of-line-43 child-of-line-154  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(3700px);">186</div><div data-line-number="187" class="child-of-line-43 child-of-line-154  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(3720px);">187</div><div data-line-number="188" class="child-of-line-43 child-of-line-154  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(3740px);">188</div><div data-line-number="189" class="child-of-line-43 child-of-line-154  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(3760px);">189</div><div data-line-number="190" class="child-of-line-43 child-of-line-154  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(3780px);">190</div><div data-line-number="191" class="child-of-line-43 child-of-line-154  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(3800px);">191</div><div data-line-number="192" class="child-of-line-43 child-of-line-154  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(3820px);">192</div><div data-line-number="193" class="child-of-line-43 child-of-line-154  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(3840px);">193</div><div data-line-number="194" class="child-of-line-43 child-of-line-154  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(3860px);">194</div><div data-line-number="195" class="child-of-line-43 child-of-line-154  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(3880px);">195</div><div data-line-number="196" class="child-of-line-43 child-of-line-154  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(3900px);">196</div><div data-line-number="197" class="child-of-line-43 child-of-line-154  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(3920px);">197</div><div data-line-number="198" class="child-of-line-43 child-of-line-154  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(3940px);">198</div><div data-line-number="199" class="child-of-line-43 child-of-line-154  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(3960px);">199</div><div data-line-number="200" class="child-of-line-43 child-of-line-154  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(3980px);">200</div><div data-line-number="201" class="child-of-line-43 child-of-line-154  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(4000px);">201</div><div data-line-number="202" class="child-of-line-43 child-of-line-154  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(4020px);">202</div><div data-line-number="203" class="child-of-line-43 child-of-line-154  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(4040px);">203</div><div data-line-number="204" class="child-of-line-43 child-of-line-154  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(4060px);">204</div><div data-line-number="205" class="child-of-line-43 child-of-line-154  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(4080px);">205</div><div data-line-number="206" class="child-of-line-43 child-of-line-154  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(4100px);">206</div><div data-line-number="207" class="child-of-line-43 child-of-line-154  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(4120px);">207</div><div data-line-number="208" class="child-of-line-43  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(4140px);">208</div><div data-line-number="209" class="react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(4160px);">209</div><div data-line-number="210" class="react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(4180px);">210</div><div data-line-number="211" class="react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(4200px);">211</div></div><div class="react-code-lines" style="height: 4220px;"><div data-key="0" class="react-code-text react-code-line-contents" style="min-height: auto;"><div><div id="LC1" class="react-file-line html-div" data-testid="code-cell" data-line-number="1" inert="inert" style="position: relative;"><span class="pl-k">import</span> <span class="pl-v">React</span> <span class="pl-k">from</span> <span class="pl-s">"react"</span><span class="pl-kos">;</span></div></div></div><div data-key="1" class="react-code-text react-code-line-contents virtual" style="transform: translateY(20px); min-height: auto;"><div><div id="LC2" class="react-file-line html-div" data-testid="code-cell" data-line-number="2" inert="inert" style="position: relative;"><span class="pl-k">import</span> <span class="pl-s1">apiKeys</span> <span class="pl-k">from</span> <span class="pl-s">"./apiKeys"</span><span class="pl-kos">;</span></div></div></div><div data-key="2" class="react-code-text react-code-line-contents virtual" style="transform: translateY(40px); min-height: auto;"><div><div id="LC3" class="react-file-line html-div" data-testid="code-cell" data-line-number="3" inert="inert" style="position: relative;"><span class="pl-k">import</span> <span class="pl-v">Clock</span> <span class="pl-k">from</span> <span class="pl-s">"react-live-clock"</span><span class="pl-kos">;</span></div></div></div><div data-key="3" class="react-code-text react-code-line-contents virtual" style="transform: translateY(60px); min-height: auto;"><div><div id="LC4" class="react-file-line html-div" data-testid="code-cell" data-line-number="4" inert="inert" style="position: relative;"><span class="pl-k">import</span> <span class="pl-v">Forcast</span> <span class="pl-k">from</span> <span class="pl-s">"./forcast"</span><span class="pl-kos">;</span></div></div></div><div data-key="4" class="react-code-text react-code-line-contents virtual" style="transform: translateY(80px); min-height: auto;"><div><div id="LC5" class="react-file-line html-div" data-testid="code-cell" data-line-number="5" inert="inert" style="position: relative;"><span class="pl-k">import</span> <span class="pl-s1">loader</span> <span class="pl-k">from</span> <span class="pl-s">"./images/WeatherIcons.gif"</span><span class="pl-kos">;</span></div></div></div><div data-key="5" class="react-code-text react-code-line-contents virtual" style="transform: translateY(100px); min-height: auto;"><div><div id="LC6" class="react-file-line html-div" data-testid="code-cell" data-line-number="6" inert="inert" style="position: relative;"><span class="pl-k">import</span> <span class="pl-v">ReactAnimatedWeather</span> <span class="pl-k">from</span> <span class="pl-s">"react-animated-weather"</span><span class="pl-kos">;</span></div></div></div><div data-key="6" class="react-code-text react-code-line-contents virtual" style="transform: translateY(120px); min-height: auto;"><div><div id="LC7" class="react-file-line html-div" data-testid="code-cell" data-line-number="7" inert="inert" style="position: relative;"><span class="pl-k">const</span> <span class="pl-en">dateBuilder</span> <span class="pl-c1">=</span> <span class="pl-kos">(</span><span class="pl-s1">d</span><span class="pl-kos">)</span> <span class="pl-c1">=&gt;</span> <span class="pl-kos">{</span></div></div></div><div data-key="7" class="child-of-line-6  react-code-text react-code-line-contents virtual" style="transform: translateY(140px); min-height: auto;"><div><div id="LC8" class="react-file-line html-div" data-testid="code-cell" data-line-number="8" inert="inert" style="position: relative;">  <span class="pl-k">let</span> <span class="pl-s1">months</span> <span class="pl-c1">=</span> <span class="pl-kos">[</span></div></div></div><div data-key="8" class="child-of-line-6  react-code-text react-code-line-contents virtual" style="transform: translateY(160px); min-height: auto;"><div><div id="LC9" class="react-file-line html-div" data-testid="code-cell" data-line-number="9" inert="inert" style="position: relative;">    <span class="pl-s">"January"</span><span class="pl-kos">,</span></div></div></div><div data-key="9" class="child-of-line-6  react-code-text react-code-line-contents virtual" style="transform: translateY(180px); min-height: auto;"><div><div id="LC10" class="react-file-line html-div" data-testid="code-cell" data-line-number="10" inert="inert" style="position: relative;">    <span class="pl-s">"February"</span><span class="pl-kos">,</span></div></div></div><div data-key="10" class="child-of-line-6  react-code-text react-code-line-contents virtual" style="transform: translateY(200px); min-height: auto;"><div><div id="LC11" class="react-file-line html-div" data-testid="code-cell" data-line-number="11" inert="inert" style="position: relative;">    <span class="pl-s">"March"</span><span class="pl-kos">,</span></div></div></div><div data-key="11" class="child-of-line-6  react-code-text react-code-line-contents virtual" style="transform: translateY(220px); min-height: auto;"><div><div id="LC12" class="react-file-line html-div" data-testid="code-cell" data-line-number="12" inert="inert" style="position: relative;">    <span class="pl-s">"April"</span><span class="pl-kos">,</span></div></div></div><div data-key="12" class="child-of-line-6  react-code-text react-code-line-contents virtual" style="transform: translateY(240px); min-height: auto;"><div><div id="LC13" class="react-file-line html-div" data-testid="code-cell" data-line-number="13" inert="inert" style="position: relative;">    <span class="pl-s">"May"</span><span class="pl-kos">,</span></div></div></div><div data-key="13" class="child-of-line-6  react-code-text react-code-line-contents virtual" style="transform: translateY(260px); min-height: auto;"><div><div id="LC14" class="react-file-line html-div" data-testid="code-cell" data-line-number="14" inert="inert" style="position: relative;">    <span class="pl-s">"June"</span><span class="pl-kos">,</span></div></div></div><div data-key="14" class="child-of-line-6  react-code-text react-code-line-contents virtual" style="transform: translateY(280px); min-height: auto;"><div><div id="LC15" class="react-file-line html-div" data-testid="code-cell" data-line-number="15" inert="inert" style="position: relative;">    <span class="pl-s">"July"</span><span class="pl-kos">,</span></div></div></div><div data-key="15" class="child-of-line-6  react-code-text react-code-line-contents virtual" style="transform: translateY(300px); min-height: auto;"><div><div id="LC16" class="react-file-line html-div" data-testid="code-cell" data-line-number="16" inert="inert" style="position: relative;">    <span class="pl-s">"August"</span><span class="pl-kos">,</span></div></div></div><div data-key="16" class="child-of-line-6  react-code-text react-code-line-contents virtual" style="transform: translateY(320px); min-height: auto;"><div><div id="LC17" class="react-file-line html-div" data-testid="code-cell" data-line-number="17" inert="inert" style="position: relative;">    <span class="pl-s">"September"</span><span class="pl-kos">,</span></div></div></div><div data-key="17" class="child-of-line-6  react-code-text react-code-line-contents virtual" style="transform: translateY(340px); min-height: auto;"><div><div id="LC18" class="react-file-line html-div" data-testid="code-cell" data-line-number="18" inert="inert" style="position: relative;">    <span class="pl-s">"October"</span><span class="pl-kos">,</span></div></div></div><div data-key="18" class="child-of-line-6  react-code-text react-code-line-contents virtual" style="transform: translateY(360px); min-height: auto;"><div><div id="LC19" class="react-file-line html-div" data-testid="code-cell" data-line-number="19" inert="inert" style="position: relative;">    <span class="pl-s">"November"</span><span class="pl-kos">,</span></div></div></div><div data-key="19" class="child-of-line-6  react-code-text react-code-line-contents virtual" style="transform: translateY(380px); min-height: auto;"><div><div id="LC20" class="react-file-line html-div" data-testid="code-cell" data-line-number="20" inert="inert" style="position: relative;">    <span class="pl-s">"December"</span><span class="pl-kos">,</span></div></div></div><div data-key="20" class="child-of-line-6  react-code-text react-code-line-contents virtual" style="transform: translateY(400px); min-height: auto;"><div><div id="LC21" class="react-file-line html-div" data-testid="code-cell" data-line-number="21" inert="inert" style="position: relative;">  <span class="pl-kos">]</span><span class="pl-kos">;</span></div></div></div><div data-key="21" class="child-of-line-6  react-code-text react-code-line-contents virtual" style="transform: translateY(420px); min-height: auto;"><div><div id="LC22" class="react-file-line html-div" data-testid="code-cell" data-line-number="22" inert="inert" style="position: relative;">  <span class="pl-k">let</span> <span class="pl-s1">days</span> <span class="pl-c1">=</span> <span class="pl-kos">[</span></div></div></div><div data-key="22" class="child-of-line-6  react-code-text react-code-line-contents virtual" style="transform: translateY(440px); min-height: auto;"><div><div id="LC23" class="react-file-line html-div" data-testid="code-cell" data-line-number="23" inert="inert" style="position: relative;">    <span class="pl-s">"Sunday"</span><span class="pl-kos">,</span></div></div></div><div data-key="23" class="child-of-line-6  react-code-text react-code-line-contents virtual" style="transform: translateY(460px); min-height: auto;"><div><div id="LC24" class="react-file-line html-div" data-testid="code-cell" data-line-number="24" inert="inert" style="position: relative;">    <span class="pl-s">"Monday"</span><span class="pl-kos">,</span></div></div></div><div data-key="24" class="child-of-line-6  react-code-text react-code-line-contents virtual" style="transform: translateY(480px); min-height: auto;"><div><div id="LC25" class="react-file-line html-div" data-testid="code-cell" data-line-number="25" inert="inert" style="position: relative;">    <span class="pl-s">"Tuesday"</span><span class="pl-kos">,</span></div></div></div><div data-key="25" class="child-of-line-6  react-code-text react-code-line-contents virtual" style="transform: translateY(500px); min-height: auto;"><div><div id="LC26" class="react-file-line html-div" data-testid="code-cell" data-line-number="26" inert="inert" style="position: relative;">    <span class="pl-s">"Wednesday"</span><span class="pl-kos">,</span></div></div></div><div data-key="26" class="child-of-line-6  react-code-text react-code-line-contents virtual" style="transform: translateY(520px); min-height: auto;"><div><div id="LC27" class="react-file-line html-div" data-testid="code-cell" data-line-number="27" inert="inert" style="position: relative;">    <span class="pl-s">"Thursday"</span><span class="pl-kos">,</span></div></div></div><div data-key="27" class="child-of-line-6  react-code-text react-code-line-contents virtual" style="transform: translateY(540px); min-height: auto;"><div><div id="LC28" class="react-file-line html-div" data-testid="code-cell" data-line-number="28" inert="inert" style="position: relative;">    <span class="pl-s">"Friday"</span><span class="pl-kos">,</span></div></div></div><div data-key="28" class="child-of-line-6  react-code-text react-code-line-contents virtual" style="transform: translateY(560px); min-height: auto;"><div><div id="LC29" class="react-file-line html-div" data-testid="code-cell" data-line-number="29" inert="inert" style="position: relative;">    <span class="pl-s">"Saturday"</span><span class="pl-kos">,</span></div></div></div><div data-key="29" class="child-of-line-6  react-code-text react-code-line-contents virtual" style="transform: translateY(580px); min-height: auto;"><div><div id="LC30" class="react-file-line html-div" data-testid="code-cell" data-line-number="30" inert="inert" style="position: relative;">  <span class="pl-kos">]</span><span class="pl-kos">;</span></div></div></div><div data-key="30" class="child-of-line-6  react-code-text react-code-line-contents virtual" style="transform: translateY(600px); min-height: auto;"><div><div id="LC31" class="react-file-line html-div" data-testid="code-cell" data-line-number="31" inert="inert" style="position: relative;">
</div></div></div><div data-key="31" class="child-of-line-6  react-code-text react-code-line-contents virtual" style="transform: translateY(620px); min-height: auto;"><div><div id="LC32" class="react-file-line html-div" data-testid="code-cell" data-line-number="32" inert="inert" style="position: relative;">  <span class="pl-k">let</span> <span class="pl-s1">day</span> <span class="pl-c1">=</span> <span class="pl-s1">days</span><span class="pl-kos">[</span><span class="pl-s1">d</span><span class="pl-kos">.</span><span class="pl-en">getDay</span><span class="pl-kos">(</span><span class="pl-kos">)</span><span class="pl-kos">]</span><span class="pl-kos">;</span></div></div></div><div data-key="32" class="child-of-line-6  react-code-text react-code-line-contents virtual" style="transform: translateY(640px); min-height: auto;"><div><div id="LC33" class="react-file-line html-div" data-testid="code-cell" data-line-number="33" inert="inert" style="position: relative;">  <span class="pl-k">let</span> <span class="pl-s1">date</span> <span class="pl-c1">=</span> <span class="pl-s1">d</span><span class="pl-kos">.</span><span class="pl-en">getDate</span><span class="pl-kos">(</span><span class="pl-kos">)</span><span class="pl-kos">;</span></div></div></div><div data-key="33" class="child-of-line-6  react-code-text react-code-line-contents virtual" style="transform: translateY(660px); min-height: auto;"><div><div id="LC34" class="react-file-line html-div" data-testid="code-cell" data-line-number="34" inert="inert" style="position: relative;">  <span class="pl-k">let</span> <span class="pl-s1">month</span> <span class="pl-c1">=</span> <span class="pl-s1">months</span><span class="pl-kos">[</span><span class="pl-s1">d</span><span class="pl-kos">.</span><span class="pl-en">getMonth</span><span class="pl-kos">(</span><span class="pl-kos">)</span><span class="pl-kos">]</span><span class="pl-kos">;</span></div></div></div><div data-key="34" class="child-of-line-6  react-code-text react-code-line-contents virtual" style="transform: translateY(680px); min-height: auto;"><div><div id="LC35" class="react-file-line html-div" data-testid="code-cell" data-line-number="35" inert="inert" style="position: relative;">  <span class="pl-k">let</span> <span class="pl-s1">year</span> <span class="pl-c1">=</span> <span class="pl-s1">d</span><span class="pl-kos">.</span><span class="pl-en">getFullYear</span><span class="pl-kos">(</span><span class="pl-kos">)</span><span class="pl-kos">;</span></div></div></div><div data-key="35" class="child-of-line-6  react-code-text react-code-line-contents virtual" style="transform: translateY(700px); min-height: auto;"><div><div id="LC36" class="react-file-line html-div" data-testid="code-cell" data-line-number="36" inert="inert" style="position: relative;">
</div></div></div><div data-key="36" class="child-of-line-6  react-code-text react-code-line-contents virtual" style="transform: translateY(720px); min-height: auto;"><div><div id="LC37" class="react-file-line html-div" data-testid="code-cell" data-line-number="37" inert="inert" style="position: relative;">  <span class="pl-k">return</span> <span class="pl-s">`<span class="pl-s1"><span class="pl-kos">${</span><span class="pl-s1">day</span><span class="pl-kos">}</span></span>, <span class="pl-s1"><span class="pl-kos">${</span><span class="pl-s1">date</span><span class="pl-kos">}</span></span> <span class="pl-s1"><span class="pl-kos">${</span><span class="pl-s1">month</span><span class="pl-kos">}</span></span> <span class="pl-s1"><span class="pl-kos">${</span><span class="pl-s1">year</span><span class="pl-kos">}</span></span>`</span><span class="pl-kos">;</span></div></div></div><div data-key="37" class="react-code-text react-code-line-contents virtual" style="transform: translateY(740px); min-height: auto;"><div><div id="LC38" class="react-file-line html-div" data-testid="code-cell" data-line-number="38" inert="inert" style="position: relative;"><span class="pl-kos">}</span><span class="pl-kos">;</span></div></div></div><div data-key="38" class="react-code-text react-code-line-contents virtual" style="transform: translateY(760px); min-height: auto;"><div><div id="LC39" class="react-file-line html-div" data-testid="code-cell" data-line-number="39" inert="inert" style="position: relative;"><span class="pl-k">const</span> <span class="pl-s1">defaults</span> <span class="pl-c1">=</span> <span class="pl-kos">{</span></div></div></div><div data-key="39" class="react-code-text react-code-line-contents virtual" style="transform: translateY(780px); min-height: auto;"><div><div id="LC40" class="react-file-line html-div" data-testid="code-cell" data-line-number="40" inert="inert" style="position: relative;">  <span class="pl-c1">color</span>: <span class="pl-s">"white"</span><span class="pl-kos">,</span></div></div></div><div data-key="40" class="react-code-text react-code-line-contents virtual" style="transform: translateY(800px); min-height: auto;"><div><div id="LC41" class="react-file-line html-div" data-testid="code-cell" data-line-number="41" inert="inert" style="position: relative;">  <span class="pl-c1">size</span>: <span class="pl-c1">112</span><span class="pl-kos">,</span></div></div></div><div data-key="41" class="react-code-text react-code-line-contents virtual" style="transform: translateY(820px); min-height: auto;"><div><div id="LC42" class="react-file-line html-div" data-testid="code-cell" data-line-number="42" inert="inert" style="position: relative;">  <span class="pl-c1">animate</span>: <span class="pl-c1">true</span><span class="pl-kos">,</span></div></div></div><div data-key="42" class="react-code-text react-code-line-contents virtual" style="transform: translateY(840px); min-height: auto;"><div><div id="LC43" class="react-file-line html-div" data-testid="code-cell" data-line-number="43" inert="inert" style="position: relative;"><span class="pl-kos">}</span><span class="pl-kos">;</span></div></div></div><div data-key="43" class="react-code-text react-code-line-contents virtual" style="transform: translateY(860px); min-height: auto;"><div><div id="LC44" class="react-file-line html-div" data-testid="code-cell" data-line-number="44" inert="inert" style="position: relative;"><span class="pl-k">class</span> <span class="pl-v">Weather</span> <span class="pl-k">extends</span> <span class="pl-v">React</span><span class="pl-kos">.</span><span class="pl-c1">Component</span> <span class="pl-kos">{</span></div></div></div><div data-key="44" class="child-of-line-43  react-code-text react-code-line-contents virtual" style="transform: translateY(880px); min-height: auto;"><div><div id="LC45" class="react-file-line html-div" data-testid="code-cell" data-line-number="45" inert="inert" style="position: relative;">  <span class="pl-c1">state</span> <span class="pl-c1">=</span> <span class="pl-kos">{</span></div></div></div><div data-key="45" class="child-of-line-43  react-code-text react-code-line-contents virtual" style="transform: translateY(900px); min-height: auto;"><div><div id="LC46" class="react-file-line html-div" data-testid="code-cell" data-line-number="46" inert="inert" style="position: relative;">    <span class="pl-c1">lat</span>: <span class="pl-c1">undefined</span><span class="pl-kos">,</span></div></div></div><div data-key="46" class="child-of-line-43  react-code-text react-code-line-contents virtual" style="transform: translateY(920px); min-height: auto;"><div><div id="LC47" class="react-file-line html-div" data-testid="code-cell" data-line-number="47" inert="inert" style="position: relative;">    <span class="pl-c1">lon</span>: <span class="pl-c1">undefined</span><span class="pl-kos">,</span></div></div></div><div data-key="47" class="child-of-line-43  react-code-text react-code-line-contents virtual" style="transform: translateY(940px); min-height: auto;"><div><div id="LC48" class="react-file-line html-div" data-testid="code-cell" data-line-number="48" inert="inert" style="position: relative;">    <span class="pl-c1">errorMessage</span>: <span class="pl-c1">undefined</span><span class="pl-kos">,</span></div></div></div><div data-key="48" class="child-of-line-43  react-code-text react-code-line-contents virtual" style="transform: translateY(960px); min-height: auto;"><div><div id="LC49" class="react-file-line html-div" data-testid="code-cell" data-line-number="49" inert="inert" style="position: relative;">    <span class="pl-c1">temperatureC</span>: <span class="pl-c1">undefined</span><span class="pl-kos">,</span></div></div></div><div data-key="49" class="child-of-line-43  react-code-text react-code-line-contents virtual" style="transform: translateY(980px); min-height: auto;"><div><div id="LC50" class="react-file-line html-div" data-testid="code-cell" data-line-number="50" inert="inert" style="position: relative;">    <span class="pl-c1">temperatureF</span>: <span class="pl-c1">undefined</span><span class="pl-kos">,</span></div></div></div><div data-key="50" class="child-of-line-43  react-code-text react-code-line-contents virtual" style="transform: translateY(1000px); min-height: auto;"><div><div id="LC51" class="react-file-line html-div" data-testid="code-cell" data-line-number="51" inert="inert" style="position: relative;">    <span class="pl-c1">city</span>: <span class="pl-c1">undefined</span><span class="pl-kos">,</span></div></div></div><div data-key="51" class="child-of-line-43  react-code-text react-code-line-contents virtual" style="transform: translateY(1020px); min-height: auto;"><div><div id="LC52" class="react-file-line html-div" data-testid="code-cell" data-line-number="52" inert="inert" style="position: relative;">    <span class="pl-c1">country</span>: <span class="pl-c1">undefined</span><span class="pl-kos">,</span></div></div></div><div data-key="52" class="child-of-line-43  react-code-text react-code-line-contents virtual" style="transform: translateY(1040px); min-height: auto;"><div><div id="LC53" class="react-file-line html-div" data-testid="code-cell" data-line-number="53" inert="inert" style="position: relative;">    <span class="pl-c1">humidity</span>: <span class="pl-c1">undefined</span><span class="pl-kos">,</span></div></div></div><div data-key="53" class="child-of-line-43  react-code-text react-code-line-contents virtual" style="transform: translateY(1060px); min-height: auto;"><div><div id="LC54" class="react-file-line html-div" data-testid="code-cell" data-line-number="54" inert="inert" style="position: relative;">    <span class="pl-c1">description</span>: <span class="pl-c1">undefined</span><span class="pl-kos">,</span></div></div></div><div data-key="54" class="child-of-line-43  react-code-text react-code-line-contents virtual" style="transform: translateY(1080px); min-height: auto;"><div><div id="LC55" class="react-file-line html-div" data-testid="code-cell" data-line-number="55" inert="inert" style="position: relative;">    <span class="pl-c1">icon</span>: <span class="pl-s">"CLEAR_DAY"</span><span class="pl-kos">,</span></div></div></div><div data-key="55" class="child-of-line-43  react-code-text react-code-line-contents virtual" style="transform: translateY(1100px); min-height: auto;"><div><div id="LC56" class="react-file-line html-div" data-testid="code-cell" data-line-number="56" inert="inert" style="position: relative;">    <span class="pl-c1">sunrise</span>: <span class="pl-c1">undefined</span><span class="pl-kos">,</span></div></div></div><div data-key="56" class="child-of-line-43  react-code-text react-code-line-contents virtual" style="transform: translateY(1120px); min-height: auto;"><div><div id="LC57" class="react-file-line html-div" data-testid="code-cell" data-line-number="57" inert="inert" style="position: relative;">    <span class="pl-c1">sunset</span>: <span class="pl-c1">undefined</span><span class="pl-kos">,</span></div></div></div><div data-key="57" class="child-of-line-43  react-code-text react-code-line-contents virtual" style="transform: translateY(1140px); min-height: auto;"><div><div id="LC58" class="react-file-line html-div" data-testid="code-cell" data-line-number="58" inert="inert" style="position: relative;">    <span class="pl-c1">errorMsg</span>: <span class="pl-c1">undefined</span><span class="pl-kos">,</span></div></div></div><div data-key="58" class="child-of-line-43  react-code-text react-code-line-contents virtual" style="transform: translateY(1160px); min-height: auto;"><div><div id="LC59" class="react-file-line html-div" data-testid="code-cell" data-line-number="59" inert="inert" style="position: relative;">  <span class="pl-kos">}</span><span class="pl-kos">;</span></div></div></div><div data-key="59" class="child-of-line-43  react-code-text react-code-line-contents virtual" style="transform: translateY(1180px); min-height: auto;"><div><div id="LC60" class="react-file-line html-div" data-testid="code-cell" data-line-number="60" inert="inert" style="position: relative;">
</div></div></div><div data-key="60" class="child-of-line-43  react-code-text react-code-line-contents virtual" style="transform: translateY(1200px); min-height: auto;"><div><div id="LC61" class="react-file-line html-div" data-testid="code-cell" data-line-number="61" inert="inert" style="position: relative;">  <span class="pl-en">componentDidMount</span><span class="pl-kos">(</span><span class="pl-kos">)</span> <span class="pl-kos">{</span></div></div></div><div data-key="61" class="child-of-line-43 child-of-line-60  react-code-text react-code-line-contents virtual" style="transform: translateY(1220px); min-height: auto;"><div><div id="LC62" class="react-file-line html-div" data-testid="code-cell" data-line-number="62" inert="inert" style="position: relative;">    <span class="pl-k">if</span> <span class="pl-kos">(</span><span class="pl-s1">navigator</span><span class="pl-kos">.</span><span class="pl-c1">geolocation</span><span class="pl-kos">)</span> <span class="pl-kos">{</span></div></div></div><div data-key="62" class="child-of-line-43 child-of-line-60  react-code-text react-code-line-contents virtual" style="transform: translateY(1240px); min-height: auto;"><div><div id="LC63" class="react-file-line html-div" data-testid="code-cell" data-line-number="63" inert="inert" style="position: relative;">      <span class="pl-smi">this</span><span class="pl-kos">.</span><span class="pl-en">getPosition</span><span class="pl-kos">(</span><span class="pl-kos">)</span></div></div></div><div data-key="63" class="child-of-line-43 child-of-line-60  react-code-text react-code-line-contents virtual" style="transform: translateY(1260px); min-height: auto;"><div><div id="LC64" class="react-file-line html-div" data-testid="code-cell" data-line-number="64" inert="inert" style="position: relative;">        <span class="pl-c">//If user allow location service then will fetch data &amp; send it to get-weather function.</span></div></div></div><div data-key="64" class="child-of-line-43 child-of-line-60  react-code-text react-code-line-contents virtual" style="transform: translateY(1280px); min-height: auto;"><div><div id="LC65" class="react-file-line html-div" data-testid="code-cell" data-line-number="65" inert="inert" style="position: relative;">        <span class="pl-kos">.</span><span class="pl-en">then</span><span class="pl-kos">(</span><span class="pl-kos">(</span><span class="pl-s1">position</span><span class="pl-kos">)</span> <span class="pl-c1">=&gt;</span> <span class="pl-kos">{</span></div></div></div><div data-key="65" class="child-of-line-43 child-of-line-60  react-code-text react-code-line-contents virtual" style="transform: translateY(1300px); min-height: auto;"><div><div id="LC66" class="react-file-line html-div" data-testid="code-cell" data-line-number="66" inert="inert" style="position: relative;">          <span class="pl-smi">this</span><span class="pl-kos">.</span><span class="pl-en">getWeather</span><span class="pl-kos">(</span><span class="pl-s1">position</span><span class="pl-kos">.</span><span class="pl-c1">coords</span><span class="pl-kos">.</span><span class="pl-c1">latitude</span><span class="pl-kos">,</span> <span class="pl-s1">position</span><span class="pl-kos">.</span><span class="pl-c1">coords</span><span class="pl-kos">.</span><span class="pl-c1">longitude</span><span class="pl-kos">)</span><span class="pl-kos">;</span></div></div></div><div data-key="66" class="child-of-line-43 child-of-line-60  react-code-text react-code-line-contents virtual" style="transform: translateY(1320px); min-height: auto;"><div><div id="LC67" class="react-file-line html-div" data-testid="code-cell" data-line-number="67" inert="inert" style="position: relative;">        <span class="pl-kos">}</span><span class="pl-kos">)</span></div></div></div><div data-key="67" class="child-of-line-43 child-of-line-60  react-code-text react-code-line-contents virtual" style="transform: translateY(1340px); min-height: auto;"><div><div id="LC68" class="react-file-line html-div" data-testid="code-cell" data-line-number="68" inert="inert" style="position: relative;">        <span class="pl-kos">.</span><span class="pl-en">catch</span><span class="pl-kos">(</span><span class="pl-kos">(</span><span class="pl-s1">err</span><span class="pl-kos">)</span> <span class="pl-c1">=&gt;</span> <span class="pl-kos">{</span></div></div></div><div data-key="68" class="child-of-line-43 child-of-line-60  react-code-text react-code-line-contents virtual" style="transform: translateY(1360px); min-height: auto;"><div><div id="LC69" class="react-file-line html-div" data-testid="code-cell" data-line-number="69" inert="inert" style="position: relative;">          <span class="pl-c">//If user denied location service then standard location weather will le shown on basis of latitude &amp; latitude.</span></div></div></div><div data-key="69" class="child-of-line-43 child-of-line-60  react-code-text react-code-line-contents virtual" style="transform: translateY(1380px); min-height: auto;"><div><div id="LC70" class="react-file-line html-div" data-testid="code-cell" data-line-number="70" inert="inert" style="position: relative;">          <span class="pl-smi">this</span><span class="pl-kos">.</span><span class="pl-en">getWeather</span><span class="pl-kos">(</span><span class="pl-c1">28.67</span><span class="pl-kos">,</span> <span class="pl-c1">77.22</span><span class="pl-kos">)</span><span class="pl-kos">;</span></div></div></div><div data-key="70" class="child-of-line-43 child-of-line-60  react-code-text react-code-line-contents virtual" style="transform: translateY(1400px); min-height: auto;"><div><div id="LC71" class="react-file-line html-div" data-testid="code-cell" data-line-number="71" inert="inert" style="position: relative;">          <span class="pl-en">alert</span><span class="pl-kos">(</span></div></div></div><div data-key="71" class="child-of-line-43 child-of-line-60  react-code-text react-code-line-contents virtual" style="transform: translateY(1420px); min-height: auto;"><div><div id="LC72" class="react-file-line html-div" data-testid="code-cell" data-line-number="72" inert="inert" style="position: relative;">            <span class="pl-s">"You have disabled location service. Allow 'This APP' to access your location. Your current location will be used for calculating Real time weather."</span></div></div></div><div data-key="72" class="child-of-line-43 child-of-line-60  react-code-text react-code-line-contents virtual" style="transform: translateY(1440px); min-height: auto;"><div><div id="LC73" class="react-file-line html-div" data-testid="code-cell" data-line-number="73" inert="inert" style="position: relative;">          <span class="pl-kos">)</span><span class="pl-kos">;</span></div></div></div><div data-key="73" class="child-of-line-43 child-of-line-60  react-code-text react-code-line-contents virtual" style="transform: translateY(1460px); min-height: auto;"><div><div id="LC74" class="react-file-line html-div" data-testid="code-cell" data-line-number="74" inert="inert" style="position: relative;">        <span class="pl-kos">}</span><span class="pl-kos">)</span><span class="pl-kos">;</span></div></div></div><div data-key="74" class="child-of-line-43 child-of-line-60  react-code-text react-code-line-contents virtual" style="transform: translateY(1480px); min-height: auto;"><div><div id="LC75" class="react-file-line html-div" data-testid="code-cell" data-line-number="75" inert="inert" style="position: relative;">    <span class="pl-kos">}</span> <span class="pl-k">else</span> <span class="pl-kos">{</span></div></div></div><div data-key="75" class="child-of-line-43 child-of-line-60  react-code-text react-code-line-contents virtual" style="transform: translateY(1500px); min-height: auto;"><div><div id="LC76" class="react-file-line html-div" data-testid="code-cell" data-line-number="76" inert="inert" style="position: relative;">      <span class="pl-en">alert</span><span class="pl-kos">(</span><span class="pl-s">"Geolocation not available"</span><span class="pl-kos">)</span><span class="pl-kos">;</span></div></div></div><div data-key="76" class="child-of-line-43 child-of-line-60  react-code-text react-code-line-contents virtual" style="transform: translateY(1520px); min-height: auto;"><div><div id="LC77" class="react-file-line html-div" data-testid="code-cell" data-line-number="77" inert="inert" style="position: relative;">    <span class="pl-kos">}</span></div></div></div><div data-key="77" class="child-of-line-43 child-of-line-60  react-code-text react-code-line-contents virtual" style="transform: translateY(1540px); min-height: auto;"><div><div id="LC78" class="react-file-line html-div" data-testid="code-cell" data-line-number="78" inert="inert" style="position: relative;">
</div></div></div><div data-key="78" class="child-of-line-43 child-of-line-60  react-code-text react-code-line-contents virtual" style="transform: translateY(1560px); min-height: auto;"><div><div id="LC79" class="react-file-line html-div" data-testid="code-cell" data-line-number="79" inert="inert" style="position: relative;">    <span class="pl-smi">this</span><span class="pl-kos">.</span><span class="pl-c1">timerID</span> <span class="pl-c1">=</span> <span class="pl-en">setInterval</span><span class="pl-kos">(</span></div></div></div><div data-key="79" class="child-of-line-43 child-of-line-60  react-code-text react-code-line-contents virtual" style="transform: translateY(1580px); min-height: auto;"><div><div id="LC80" class="react-file-line html-div" data-testid="code-cell" data-line-number="80" inert="inert" style="position: relative;">      <span class="pl-kos">(</span><span class="pl-kos">)</span> <span class="pl-c1">=&gt;</span> <span class="pl-smi">this</span><span class="pl-kos">.</span><span class="pl-en">getWeather</span><span class="pl-kos">(</span><span class="pl-smi">this</span><span class="pl-kos">.</span><span class="pl-c1">state</span><span class="pl-kos">.</span><span class="pl-c1">lat</span><span class="pl-kos">,</span> <span class="pl-smi">this</span><span class="pl-kos">.</span><span class="pl-c1">state</span><span class="pl-kos">.</span><span class="pl-c1">lon</span><span class="pl-kos">)</span><span class="pl-kos">,</span></div></div></div><div data-key="80" class="child-of-line-43 child-of-line-60  react-code-text react-code-line-contents virtual" style="transform: translateY(1600px); min-height: auto;"><div><div id="LC81" class="react-file-line html-div" data-testid="code-cell" data-line-number="81" inert="inert" style="position: relative;">      <span class="pl-c1">600000</span></div></div></div><div data-key="81" class="child-of-line-43 child-of-line-60  react-code-text react-code-line-contents virtual" style="transform: translateY(1620px); min-height: auto;"><div><div id="LC82" class="react-file-line html-div" data-testid="code-cell" data-line-number="82" inert="inert" style="position: relative;">    <span class="pl-kos">)</span><span class="pl-kos">;</span></div></div></div><div data-key="82" class="child-of-line-43  react-code-text react-code-line-contents virtual" style="transform: translateY(1640px); min-height: auto;"><div><div id="LC83" class="react-file-line html-div" data-testid="code-cell" data-line-number="83" inert="inert" style="position: relative;">  <span class="pl-kos">}</span></div></div></div><div data-key="83" class="child-of-line-43  react-code-text react-code-line-contents virtual" style="transform: translateY(1660px); min-height: auto;"><div><div id="LC84" class="react-file-line html-div" data-testid="code-cell" data-line-number="84" inert="inert" style="position: relative;">
</div></div></div><div data-key="84" class="child-of-line-43  react-code-text react-code-line-contents virtual" style="transform: translateY(1680px); min-height: auto;"><div><div id="LC85" class="react-file-line html-div" data-testid="code-cell" data-line-number="85" inert="inert" style="position: relative;">  <span class="pl-en">componentWillUnmount</span><span class="pl-kos">(</span><span class="pl-kos">)</span> <span class="pl-kos">{</span></div></div></div><div data-key="85" class="child-of-line-43  react-code-text react-code-line-contents virtual" style="transform: translateY(1700px); min-height: auto;"><div><div id="LC86" class="react-file-line html-div" data-testid="code-cell" data-line-number="86" inert="inert" style="position: relative;">    <span class="pl-en">clearInterval</span><span class="pl-kos">(</span><span class="pl-smi">this</span><span class="pl-kos">.</span><span class="pl-c1">timerID</span><span class="pl-kos">)</span><span class="pl-kos">;</span></div></div></div><div data-key="86" class="child-of-line-43  react-code-text react-code-line-contents virtual" style="transform: translateY(1720px); min-height: auto;"><div><div id="LC87" class="react-file-line html-div" data-testid="code-cell" data-line-number="87" inert="inert" style="position: relative;">  <span class="pl-kos">}</span></div></div></div><div data-key="87" class="child-of-line-43  react-code-text react-code-line-contents virtual" style="transform: translateY(1740px); min-height: auto;"><div><div id="LC88" class="react-file-line html-div" data-testid="code-cell" data-line-number="88" inert="inert" style="position: relative;">
</div></div></div><div data-key="88" class="child-of-line-43  react-code-text react-code-line-contents virtual" style="transform: translateY(1760px); min-height: auto;"><div><div id="LC89" class="react-file-line html-div" data-testid="code-cell" data-line-number="89" inert="inert" style="position: relative;">  <span class="pl-c">// tick = () =&gt; {</span></div></div></div><div data-key="89" class="child-of-line-43  react-code-text react-code-line-contents virtual" style="transform: translateY(1780px); min-height: auto;"><div><div id="LC90" class="react-file-line html-div" data-testid="code-cell" data-line-number="90" inert="inert" style="position: relative;">  <span class="pl-c">//   this.getPosition()</span></div></div></div><div data-key="90" class="child-of-line-43  react-code-text react-code-line-contents virtual" style="transform: translateY(1800px); min-height: auto;"><div><div id="LC91" class="react-file-line html-div" data-testid="code-cell" data-line-number="91" inert="inert" style="position: relative;">  <span class="pl-c">//   .then((position) =&gt; {</span></div></div></div><div data-key="91" class="child-of-line-43  react-code-text react-code-line-contents virtual" style="transform: translateY(1820px); min-height: auto;"><div><div id="LC92" class="react-file-line html-div" data-testid="code-cell" data-line-number="92" inert="inert" style="position: relative;">  <span class="pl-c">//     this.getWeather(position.coords.latitude, position.coords.longitude)</span></div></div></div><div data-key="92" class="child-of-line-43  react-code-text react-code-line-contents virtual" style="transform: translateY(1840px); min-height: auto;"><div><div id="LC93" class="react-file-line html-div" data-testid="code-cell" data-line-number="93" inert="inert" style="position: relative;">  <span class="pl-c">//   })</span></div></div></div><div data-key="93" class="child-of-line-43  react-code-text react-code-line-contents virtual" style="transform: translateY(1860px); min-height: auto;"><div><div id="LC94" class="react-file-line html-div" data-testid="code-cell" data-line-number="94" inert="inert" style="position: relative;">  <span class="pl-c">//   .catch((err) =&gt; {</span></div></div></div><div data-key="94" class="child-of-line-43  react-code-text react-code-line-contents virtual" style="transform: translateY(1880px); min-height: auto;"><div><div id="LC95" class="react-file-line html-div" data-testid="code-cell" data-line-number="95" inert="inert" style="position: relative;">  <span class="pl-c">//     this.setState({ errorMessage: err.message });</span></div></div></div><div data-key="95" class="child-of-line-43  react-code-text react-code-line-contents virtual" style="transform: translateY(1900px); min-height: auto;"><div><div id="LC96" class="react-file-line html-div" data-testid="code-cell" data-line-number="96" inert="inert" style="position: relative;">  <span class="pl-c">//   });</span></div></div></div><div data-key="96" class="child-of-line-43  react-code-text react-code-line-contents virtual" style="transform: translateY(1920px); min-height: auto;"><div><div id="LC97" class="react-file-line html-div" data-testid="code-cell" data-line-number="97" inert="inert" style="position: relative;">  <span class="pl-c">// }</span></div></div></div><div data-key="97" class="child-of-line-43  react-code-text react-code-line-contents virtual" style="transform: translateY(1940px); min-height: auto;"><div><div id="LC98" class="react-file-line html-div" data-testid="code-cell" data-line-number="98" inert="inert" style="position: relative;">
</div></div></div><div data-key="98" class="child-of-line-43  react-code-text react-code-line-contents virtual" style="transform: translateY(1960px); min-height: auto;"><div><div id="LC99" class="react-file-line html-div" data-testid="code-cell" data-line-number="99" inert="inert" style="position: relative;">  <span class="pl-c1">getPosition</span> <span class="pl-c1">=</span> <span class="pl-kos">(</span><span class="pl-s1">options</span><span class="pl-kos">)</span> <span class="pl-c1">=&gt;</span> <span class="pl-kos">{</span></div></div></div><div data-key="99" class="child-of-line-43  react-code-text react-code-line-contents virtual" style="transform: translateY(1980px); min-height: auto;"><div><div id="LC100" class="react-file-line html-div" data-testid="code-cell" data-line-number="100" inert="inert" style="position: relative;">    <span class="pl-k">return</span> <span class="pl-k">new</span> <span class="pl-v">Promise</span><span class="pl-kos">(</span><span class="pl-k">function</span> <span class="pl-kos">(</span><span class="pl-s1">resolve</span><span class="pl-kos">,</span> <span class="pl-s1">reject</span><span class="pl-kos">)</span> <span class="pl-kos">{</span></div></div></div><div data-key="100" class="child-of-line-43  react-code-text react-code-line-contents virtual" style="transform: translateY(2000px); min-height: auto;"><div><div id="LC101" class="react-file-line html-div" data-testid="code-cell" data-line-number="101" inert="inert" style="position: relative;">      <span class="pl-s1">navigator</span><span class="pl-kos">.</span><span class="pl-c1">geolocation</span><span class="pl-kos">.</span><span class="pl-en">getCurrentPosition</span><span class="pl-kos">(</span><span class="pl-s1">resolve</span><span class="pl-kos">,</span> <span class="pl-s1">reject</span><span class="pl-kos">,</span> <span class="pl-s1">options</span><span class="pl-kos">)</span><span class="pl-kos">;</span></div></div></div><div data-key="101" class="child-of-line-43  react-code-text react-code-line-contents virtual" style="transform: translateY(2020px); min-height: auto;"><div><div id="LC102" class="react-file-line html-div" data-testid="code-cell" data-line-number="102" inert="inert" style="position: relative;">    <span class="pl-kos">}</span><span class="pl-kos">)</span><span class="pl-kos">;</span></div></div></div><div data-key="102" class="child-of-line-43  react-code-text react-code-line-contents virtual" style="transform: translateY(2040px); min-height: auto;"><div><div id="LC103" class="react-file-line html-div" data-testid="code-cell" data-line-number="103" inert="inert" style="position: relative;">  <span class="pl-kos">}</span><span class="pl-kos">;</span></div></div></div><div data-key="103" class="child-of-line-43  react-code-text react-code-line-contents virtual" style="transform: translateY(2060px); min-height: auto;"><div><div id="LC104" class="react-file-line html-div" data-testid="code-cell" data-line-number="104" inert="inert" style="position: relative;">  <span class="pl-c1">getWeather</span> <span class="pl-c1">=</span> <span class="pl-k">async</span> <span class="pl-kos">(</span><span class="pl-s1">lat</span><span class="pl-kos">,</span> <span class="pl-s1">lon</span><span class="pl-kos">)</span> <span class="pl-c1">=&gt;</span> <span class="pl-kos">{</span></div></div></div><div data-key="104" class="child-of-line-43  react-code-text react-code-line-contents virtual" style="transform: translateY(2080px); min-height: auto;"><div><div id="LC105" class="react-file-line html-div" data-testid="code-cell" data-line-number="105" inert="inert" style="position: relative;">    <span class="pl-k">const</span> <span class="pl-s1">api_call</span> <span class="pl-c1">=</span> <span class="pl-k">await</span> <span class="pl-en">fetch</span><span class="pl-kos">(</span></div></div></div><div data-key="105" class="child-of-line-43  react-code-text react-code-line-contents virtual" style="transform: translateY(2100px); min-height: auto;"><div><div id="LC106" class="react-file-line html-div" data-testid="code-cell" data-line-number="106" inert="inert" style="position: relative;">      <span class="pl-s">`<span class="pl-s1"><span class="pl-kos">${</span><span class="pl-s1">apiKeys</span><span class="pl-kos">.</span><span class="pl-c1">base</span><span class="pl-kos">}</span></span>weather?lat=<span class="pl-s1"><span class="pl-kos">${</span><span class="pl-s1">lat</span><span class="pl-kos">}</span></span>&amp;lon=<span class="pl-s1"><span class="pl-kos">${</span><span class="pl-s1">lon</span><span class="pl-kos">}</span></span>&amp;units=metric&amp;APPID=<span class="pl-s1"><span class="pl-kos">${</span><span class="pl-s1">apiKeys</span><span class="pl-kos">.</span><span class="pl-c1">key</span><span class="pl-kos">}</span></span>`</span></div></div></div><div data-key="106" class="child-of-line-43  react-code-text react-code-line-contents virtual" style="transform: translateY(2120px); min-height: auto;"><div><div id="LC107" class="react-file-line html-div" data-testid="code-cell" data-line-number="107" inert="inert" style="position: relative;">    <span class="pl-kos">)</span><span class="pl-kos">;</span></div></div></div><div data-key="107" class="child-of-line-43  react-code-text react-code-line-contents virtual" style="transform: translateY(2140px); min-height: auto;"><div><div id="LC108" class="react-file-line html-div" data-testid="code-cell" data-line-number="108" inert="inert" style="position: relative;">    <span class="pl-k">const</span> <span class="pl-s1">data</span> <span class="pl-c1">=</span> <span class="pl-k">await</span> <span class="pl-s1">api_call</span><span class="pl-kos">.</span><span class="pl-en">json</span><span class="pl-kos">(</span><span class="pl-kos">)</span><span class="pl-kos">;</span></div></div></div><div data-key="108" class="child-of-line-43  react-code-text react-code-line-contents virtual" style="transform: translateY(2160px); min-height: auto;"><div><div id="LC109" class="react-file-line html-div" data-testid="code-cell" data-line-number="109" inert="inert" style="position: relative;">    <span class="pl-smi">this</span><span class="pl-kos">.</span><span class="pl-en">setState</span><span class="pl-kos">(</span><span class="pl-kos">{</span></div></div></div><div data-key="109" class="child-of-line-43  react-code-text react-code-line-contents virtual" style="transform: translateY(2180px); min-height: auto;"><div><div id="LC110" class="react-file-line html-div" data-testid="code-cell" data-line-number="110" inert="inert" style="position: relative;">      <span class="pl-c1">lat</span>: <span class="pl-s1">lat</span><span class="pl-kos">,</span></div></div></div><div data-key="110" class="child-of-line-43  react-code-text react-code-line-contents virtual" style="transform: translateY(2200px); min-height: auto;"><div><div id="LC111" class="react-file-line html-div" data-testid="code-cell" data-line-number="111" inert="inert" style="position: relative;">      <span class="pl-c1">lon</span>: <span class="pl-s1">lon</span><span class="pl-kos">,</span></div></div></div><div data-key="111" class="child-of-line-43  react-code-text react-code-line-contents virtual" style="transform: translateY(2220px); min-height: auto;"><div><div id="LC112" class="react-file-line html-div" data-testid="code-cell" data-line-number="112" inert="inert" style="position: relative;">      <span class="pl-c1">city</span>: <span class="pl-s1">data</span><span class="pl-kos">.</span><span class="pl-c1">name</span><span class="pl-kos">,</span></div></div></div><div data-key="112" class="child-of-line-43  react-code-text react-code-line-contents virtual" style="transform: translateY(2240px); min-height: auto;"><div><div id="LC113" class="react-file-line html-div" data-testid="code-cell" data-line-number="113" inert="inert" style="position: relative;">      <span class="pl-c1">temperatureC</span>: <span class="pl-v">Math</span><span class="pl-kos">.</span><span class="pl-en">round</span><span class="pl-kos">(</span><span class="pl-s1">data</span><span class="pl-kos">.</span><span class="pl-c1">main</span><span class="pl-kos">.</span><span class="pl-c1">temp</span><span class="pl-kos">)</span><span class="pl-kos">,</span></div></div></div><div data-key="113" class="child-of-line-43  react-code-text react-code-line-contents virtual" style="transform: translateY(2260px); min-height: auto;"><div><div id="LC114" class="react-file-line html-div" data-testid="code-cell" data-line-number="114" inert="inert" style="position: relative;">      <span class="pl-c1">temperatureF</span>: <span class="pl-v">Math</span><span class="pl-kos">.</span><span class="pl-en">round</span><span class="pl-kos">(</span><span class="pl-s1">data</span><span class="pl-kos">.</span><span class="pl-c1">main</span><span class="pl-kos">.</span><span class="pl-c1">temp</span> <span class="pl-c1">*</span> <span class="pl-c1">1.8</span> <span class="pl-c1">+</span> <span class="pl-c1">32</span><span class="pl-kos">)</span><span class="pl-kos">,</span></div></div></div><div data-key="114" class="child-of-line-43  react-code-text react-code-line-contents virtual" style="transform: translateY(2280px); min-height: auto;"><div><div id="LC115" class="react-file-line html-div" data-testid="code-cell" data-line-number="115" inert="inert" style="position: relative;">      <span class="pl-c1">humidity</span>: <span class="pl-s1">data</span><span class="pl-kos">.</span><span class="pl-c1">main</span><span class="pl-kos">.</span><span class="pl-c1">humidity</span><span class="pl-kos">,</span></div></div></div><div data-key="115" class="child-of-line-43  react-code-text react-code-line-contents virtual" style="transform: translateY(2300px); min-height: auto;"><div><div id="LC116" class="react-file-line html-div" data-testid="code-cell" data-line-number="116" inert="inert" style="position: relative;">      <span class="pl-c1">main</span>: <span class="pl-s1">data</span><span class="pl-kos">.</span><span class="pl-c1">weather</span><span class="pl-kos">[</span><span class="pl-c1">0</span><span class="pl-kos">]</span><span class="pl-kos">.</span><span class="pl-c1">main</span><span class="pl-kos">,</span></div></div></div><div data-key="116" class="child-of-line-43  react-code-text react-code-line-contents virtual" style="transform: translateY(2320px); min-height: auto;"><div><div id="LC117" class="react-file-line html-div" data-testid="code-cell" data-line-number="117" inert="inert" style="position: relative;">      <span class="pl-c1">country</span>: <span class="pl-s1">data</span><span class="pl-kos">.</span><span class="pl-c1">sys</span><span class="pl-kos">.</span><span class="pl-c1">country</span><span class="pl-kos">,</span></div></div></div><div data-key="117" class="child-of-line-43  react-code-text react-code-line-contents virtual" style="transform: translateY(2340px); min-height: auto;"><div><div id="LC118" class="react-file-line html-div" data-testid="code-cell" data-line-number="118" inert="inert" style="position: relative;">      <span class="pl-c">// sunrise: this.getTimeFromUnixTimeStamp(data.sys.sunrise),</span></div></div></div><div data-key="118" class="child-of-line-43  react-code-text react-code-line-contents virtual" style="transform: translateY(2360px); min-height: auto;"><div><div id="LC119" class="react-file-line html-div" data-testid="code-cell" data-line-number="119" inert="inert" style="position: relative;">
</div></div></div><div data-key="119" class="child-of-line-43  react-code-text react-code-line-contents virtual" style="transform: translateY(2380px); min-height: auto;"><div><div id="LC120" class="react-file-line html-div" data-testid="code-cell" data-line-number="120" inert="inert" style="position: relative;">      <span class="pl-c">// sunset: this.getTimeFromUnixTimeStamp(data.sys.sunset),</span></div></div></div><div data-key="120" class="child-of-line-43  react-code-text react-code-line-contents virtual" style="transform: translateY(2400px); min-height: auto;"><div><div id="LC121" class="react-file-line html-div" data-testid="code-cell" data-line-number="121" inert="inert" style="position: relative;">    <span class="pl-kos">}</span><span class="pl-kos">)</span><span class="pl-kos">;</span></div></div></div><div data-key="137" class="child-of-line-43  react-code-text react-code-line-contents virtual" style="transform: translateY(2740px); min-height: auto;"><div><div id="LC138" class="react-file-line html-div" data-testid="code-cell" data-line-number="138" inert="inert" style="position: relative;">      <span class="pl-k">case</span> <span class="pl-s">"Drizzle"</span>:</div></div></div><div data-key="138" class="child-of-line-43  react-code-text react-code-line-contents virtual" style="transform: translateY(2760px); min-height: auto;"><div><div id="LC139" class="react-file-line html-div" data-testid="code-cell" data-line-number="139" inert="inert" style="position: relative;">        <span class="pl-smi">this</span><span class="pl-kos">.</span><span class="pl-en">setState</span><span class="pl-kos">(</span><span class="pl-kos">{</span> <span class="pl-c1">icon</span>: <span class="pl-s">"SLEET"</span> <span class="pl-kos">}</span><span class="pl-kos">)</span><span class="pl-kos">;</span></div></div></div><div data-key="139" class="child-of-line-43  react-code-text react-code-line-contents virtual" style="transform: translateY(2780px); min-height: auto;"><div><div id="LC140" class="react-file-line html-div" data-testid="code-cell" data-line-number="140" inert="inert" style="position: relative;">        <span class="pl-k">break</span><span class="pl-kos">;</span></div></div></div><div data-key="140" class="child-of-line-43  react-code-text react-code-line-contents virtual" style="transform: translateY(2800px); min-height: auto;"><div><div id="LC141" class="react-file-line html-div" data-testid="code-cell" data-line-number="141" inert="inert" style="position: relative;">      <span class="pl-k">case</span> <span class="pl-s">"Fog"</span>:</div></div></div><div data-key="141" class="child-of-line-43  react-code-text react-code-line-contents virtual" style="transform: translateY(2820px); min-height: auto;"><div><div id="LC142" class="react-file-line html-div" data-testid="code-cell" data-line-number="142" inert="inert" style="position: relative;">        <span class="pl-smi">this</span><span class="pl-kos">.</span><span class="pl-en">setState</span><span class="pl-kos">(</span><span class="pl-kos">{</span> <span class="pl-c1">icon</span>: <span class="pl-s">"FOG"</span> <span class="pl-kos">}</span><span class="pl-kos">)</span><span class="pl-kos">;</span></div></div></div><div data-key="142" class="child-of-line-43  react-code-text react-code-line-contents virtual" style="transform: translateY(2840px); min-height: auto;"><div><div id="LC143" class="react-file-line html-div" data-testid="code-cell" data-line-number="143" inert="inert" style="position: relative;">        <span class="pl-k">break</span><span class="pl-kos">;</span></div></div></div><div data-key="143" class="child-of-line-43  react-code-text react-code-line-contents virtual" style="transform: translateY(2860px); min-height: auto;"><div><div id="LC144" class="react-file-line html-div" data-testid="code-cell" data-line-number="144" inert="inert" style="position: relative;">      <span class="pl-k">case</span> <span class="pl-s">"Smoke"</span>:</div></div></div><div data-key="144" class="child-of-line-43  react-code-text react-code-line-contents virtual" style="transform: translateY(2880px); min-height: auto;"><div><div id="LC145" class="react-file-line html-div" data-testid="code-cell" data-line-number="145" inert="inert" style="position: relative;">        <span class="pl-smi">this</span><span class="pl-kos">.</span><span class="pl-en">setState</span><span class="pl-kos">(</span><span class="pl-kos">{</span> <span class="pl-c1">icon</span>: <span class="pl-s">"FOG"</span> <span class="pl-kos">}</span><span class="pl-kos">)</span><span class="pl-kos">;</span></div></div></div><div data-key="145" class="child-of-line-43  react-code-text react-code-line-contents virtual" style="transform: translateY(2900px); min-height: auto;"><div><div id="LC146" class="react-file-line html-div" data-testid="code-cell" data-line-number="146" inert="inert" style="position: relative;">        <span class="pl-k">break</span><span class="pl-kos">;</span></div></div></div><div data-key="146" class="child-of-line-43  react-code-text react-code-line-contents virtual" style="transform: translateY(2920px); min-height: auto;"><div><div id="LC147" class="react-file-line html-div" data-testid="code-cell" data-line-number="147" inert="inert" style="position: relative;">      <span class="pl-k">case</span> <span class="pl-s">"Tornado"</span>:</div></div></div><div data-key="147" class="child-of-line-43  react-code-text react-code-line-contents virtual" style="transform: translateY(2940px); min-height: auto;"><div><div id="LC148" class="react-file-line html-div" data-testid="code-cell" data-line-number="148" inert="inert" style="position: relative;">        <span class="pl-smi">this</span><span class="pl-kos">.</span><span class="pl-en">setState</span><span class="pl-kos">(</span><span class="pl-kos">{</span> <span class="pl-c1">icon</span>: <span class="pl-s">"WIND"</span> <span class="pl-kos">}</span><span class="pl-kos">)</span><span class="pl-kos">;</span></div></div></div><div data-key="148" class="child-of-line-43  react-code-text react-code-line-contents virtual" style="transform: translateY(2960px); min-height: auto;"><div><div id="LC149" class="react-file-line html-div" data-testid="code-cell" data-line-number="149" inert="inert" style="position: relative;">        <span class="pl-k">break</span><span class="pl-kos">;</span></div></div></div><div data-key="149" class="child-of-line-43  react-code-text react-code-line-contents virtual" style="transform: translateY(2980px); min-height: auto;"><div><div id="LC150" class="react-file-line html-div" data-testid="code-cell" data-line-number="150" inert="inert" style="position: relative;">      <span class="pl-k">default</span>:</div></div></div><div data-key="150" class="child-of-line-43  react-code-text react-code-line-contents virtual" style="transform: translateY(3000px); min-height: auto;"><div><div id="LC151" class="react-file-line html-div" data-testid="code-cell" data-line-number="151" inert="inert" style="position: relative;">        <span class="pl-smi">this</span><span class="pl-kos">.</span><span class="pl-en">setState</span><span class="pl-kos">(</span><span class="pl-kos">{</span> <span class="pl-c1">icon</span>: <span class="pl-s">"CLEAR_DAY"</span> <span class="pl-kos">}</span><span class="pl-kos">)</span><span class="pl-kos">;</span></div></div></div><div data-key="151" class="child-of-line-43  react-code-text react-code-line-contents virtual" style="transform: translateY(3020px); min-height: auto;"><div><div id="LC152" class="react-file-line html-div" data-testid="code-cell" data-line-number="152" inert="inert" style="position: relative;">    <span class="pl-kos">}</span></div></div></div><div data-key="152" class="child-of-line-43  react-code-text react-code-line-contents virtual" style="transform: translateY(3040px); min-height: auto;"><div><div id="LC153" class="react-file-line html-div" data-testid="code-cell" data-line-number="153" inert="inert" style="position: relative;">  <span class="pl-kos">}</span><span class="pl-kos">;</span></div></div></div><div data-key="153" class="child-of-line-43  react-code-text react-code-line-contents virtual" style="transform: translateY(3060px); min-height: auto;"><div><div id="LC154" class="react-file-line html-div" data-testid="code-cell" data-line-number="154" inert="inert" style="position: relative;">
</div></div></div><div data-key="154" class="child-of-line-43  react-code-text react-code-line-contents virtual" style="transform: translateY(3080px); min-height: auto;"><div><div id="LC155" class="react-file-line html-div" data-testid="code-cell" data-line-number="155" inert="inert" style="position: relative;">  <span class="pl-en">render</span><span class="pl-kos">(</span><span class="pl-kos">)</span> <span class="pl-kos">{</span></div></div></div><div data-key="155" class="child-of-line-43 child-of-line-154  react-code-text react-code-line-contents virtual" style="transform: translateY(3100px); min-height: auto;"><div><div id="LC156" class="react-file-line html-div" data-testid="code-cell" data-line-number="156" inert="inert" style="position: relative;">    <span class="pl-k">if</span> <span class="pl-kos">(</span><span class="pl-smi">this</span><span class="pl-kos">.</span><span class="pl-c1">state</span><span class="pl-kos">.</span><span class="pl-c1">temperatureC</span><span class="pl-kos">)</span> <span class="pl-kos">{</span></div></div></div><div data-key="156" class="child-of-line-43 child-of-line-154  react-code-text react-code-line-contents virtual" style="transform: translateY(3120px); min-height: auto;"><div><div id="LC157" class="react-file-line html-div" data-testid="code-cell" data-line-number="157" inert="inert" style="position: relative;">      <span class="pl-k">return</span> <span class="pl-kos">(</span></div></div></div><div data-key="157" class="child-of-line-43 child-of-line-154  react-code-text react-code-line-contents virtual" style="transform: translateY(3140px); min-height: auto;"><div><div id="LC158" class="react-file-line html-div" data-testid="code-cell" data-line-number="158" inert="inert" style="position: relative;">        <span class="pl-c1">&lt;</span><span class="pl-v">React</span><span class="pl-kos">.</span><span class="pl-v">Fragment</span><span class="pl-c1">&gt;</span></div></div></div><div data-key="158" class="child-of-line-43 child-of-line-154  react-code-text react-code-line-contents virtual" style="transform: translateY(3160px); min-height: auto;"><div><div id="LC159" class="react-file-line html-div" data-testid="code-cell" data-line-number="159" inert="inert" style="position: relative;">          <span class="pl-c1">&lt;</span><span class="pl-ent">div</span> <span class="pl-c1">className</span><span class="pl-c1">=</span><span class="pl-s">"city"</span><span class="pl-c1">&gt;</span></div></div></div><div data-key="159" class="child-of-line-43 child-of-line-154  react-code-text react-code-line-contents virtual" style="transform: translateY(3180px); min-height: auto;"><div><div id="LC160" class="react-file-line html-div" data-testid="code-cell" data-line-number="160" inert="inert" style="position: relative;">            <span class="pl-c1">&lt;</span><span class="pl-ent">div</span> <span class="pl-c1">className</span><span class="pl-c1">=</span><span class="pl-s">"title"</span><span class="pl-c1">&gt;</span></div></div></div><div data-key="160" class="child-of-line-43 child-of-line-154  react-code-text react-code-line-contents virtual" style="transform: translateY(3200px); min-height: auto;"><div><div id="LC161" class="react-file-line html-div" data-testid="code-cell" data-line-number="161" inert="inert" style="position: relative;">              <span class="pl-c1">&lt;</span><span class="pl-ent">h2</span><span class="pl-c1">&gt;</span><span class="pl-kos">{</span><span class="pl-smi">this</span><span class="pl-kos">.</span><span class="pl-c1">state</span><span class="pl-kos">.</span><span class="pl-c1">city</span><span class="pl-kos">}</span><span class="pl-c1">&lt;</span><span class="pl-c1">/</span><span class="pl-ent">h2</span><span class="pl-c1">&gt;</span></div></div></div><div data-key="161" class="child-of-line-43 child-of-line-154  react-code-text react-code-line-contents virtual" style="transform: translateY(3220px); min-height: auto;"><div><div id="LC162" class="react-file-line html-div" data-testid="code-cell" data-line-number="162" inert="inert" style="position: relative;">              <span class="pl-c1">&lt;</span><span class="pl-ent">h3</span><span class="pl-c1">&gt;</span><span class="pl-kos">{</span><span class="pl-smi">this</span><span class="pl-kos">.</span><span class="pl-c1">state</span><span class="pl-kos">.</span><span class="pl-c1">country</span><span class="pl-kos">}</span><span class="pl-c1">&lt;</span><span class="pl-c1">/</span><span class="pl-ent">h3</span><span class="pl-c1">&gt;</span></div></div></div><div data-key="162" class="child-of-line-43 child-of-line-154  react-code-text react-code-line-contents virtual" style="transform: translateY(3240px); min-height: auto;"><div><div id="LC163" class="react-file-line html-div" data-testid="code-cell" data-line-number="163" inert="inert" style="position: relative;">            <span class="pl-c1">&lt;</span><span class="pl-c1">/</span><span class="pl-ent">div</span><span class="pl-c1">&gt;</span></div></div></div><div data-key="163" class="child-of-line-43 child-of-line-154  react-code-text react-code-line-contents virtual" style="transform: translateY(3260px); min-height: auto;"><div><div id="LC164" class="react-file-line html-div" data-testid="code-cell" data-line-number="164" inert="inert" style="position: relative;">            <span class="pl-c1">&lt;</span><span class="pl-ent">div</span> <span class="pl-c1">className</span><span class="pl-c1">=</span><span class="pl-s">"mb-icon"</span><span class="pl-c1">&gt;</span></div></div></div><div data-key="164" class="child-of-line-43 child-of-line-154  react-code-text react-code-line-contents virtual" style="transform: translateY(3280px); min-height: auto;"><div><div id="LC165" class="react-file-line html-div" data-testid="code-cell" data-line-number="165" inert="inert" style="position: relative;">              <span class="pl-kos">{</span><span class="pl-s">" "</span><span class="pl-kos">}</span></div></div></div><div data-key="165" class="child-of-line-43 child-of-line-154  react-code-text react-code-line-contents virtual" style="transform: translateY(3300px); min-height: auto;"><div><div id="LC166" class="react-file-line html-div" data-testid="code-cell" data-line-number="166" inert="inert" style="position: relative;">              <span class="pl-c1">&lt;</span><span class="pl-ent">ReactAnimatedWeather</span></div></div></div><div data-key="166" class="child-of-line-43 child-of-line-154  react-code-text react-code-line-contents virtual" style="transform: translateY(3320px); min-height: auto;"><div><div id="LC167" class="react-file-line html-div" data-testid="code-cell" data-line-number="167" inert="inert" style="position: relative;">                <span class="pl-c1">icon</span><span class="pl-c1">=</span><span class="pl-kos">{</span><span class="pl-smi">this</span><span class="pl-kos">.</span><span class="pl-c1">state</span><span class="pl-kos">.</span><span class="pl-c1">icon</span><span class="pl-kos">}</span></div></div></div><div data-key="167" class="child-of-line-43 child-of-line-154  react-code-text react-code-line-contents virtual" style="transform: translateY(3340px); min-height: auto;"><div><div id="LC168" class="react-file-line html-div" data-testid="code-cell" data-line-number="168" inert="inert" style="position: relative;">                <span class="pl-c1">color</span><span class="pl-c1">=</span><span class="pl-kos">{</span><span class="pl-s1">defaults</span><span class="pl-kos">.</span><span class="pl-c1">color</span><span class="pl-kos">}</span></div></div></div><div data-key="168" class="child-of-line-43 child-of-line-154  react-code-text react-code-line-contents virtual" style="transform: translateY(3360px); min-height: auto;"><div><div id="LC169" class="react-file-line html-div" data-testid="code-cell" data-line-number="169" inert="inert" style="position: relative;">                <span class="pl-c1">size</span><span class="pl-c1">=</span><span class="pl-kos">{</span><span class="pl-s1">defaults</span><span class="pl-kos">.</span><span class="pl-c1">size</span><span class="pl-kos">}</span></div></div></div><div data-key="169" class="child-of-line-43 child-of-line-154  react-code-text react-code-line-contents virtual" style="transform: translateY(3380px); min-height: auto;"><div><div id="LC170" class="react-file-line html-div" data-testid="code-cell" data-line-number="170" inert="inert" style="position: relative;">                <span class="pl-c1">animate</span><span class="pl-c1">=</span><span class="pl-kos">{</span><span class="pl-s1">defaults</span><span class="pl-kos">.</span><span class="pl-c1">animate</span><span class="pl-kos">}</span></div></div></div><div data-key="170" class="child-of-line-43 child-of-line-154  react-code-text react-code-line-contents virtual" style="transform: translateY(3400px); min-height: auto;"><div><div id="LC171" class="react-file-line html-div" data-testid="code-cell" data-line-number="171" inert="inert" style="position: relative;">              <span class="pl-c1">/</span><span class="pl-c1">&gt;</span></div></div></div><div data-key="171" class="child-of-line-43 child-of-line-154  react-code-text react-code-line-contents virtual" style="transform: translateY(3420px); min-height: auto;"><div><div id="LC172" class="react-file-line html-div" data-testid="code-cell" data-line-number="172" inert="inert" style="position: relative;">              <span class="pl-c1">&lt;</span><span class="pl-ent">p</span><span class="pl-c1">&gt;</span><span class="pl-kos">{</span><span class="pl-smi">this</span><span class="pl-kos">.</span><span class="pl-c1">state</span><span class="pl-kos">.</span><span class="pl-c1">main</span><span class="pl-kos">}</span><span class="pl-c1">&lt;</span><span class="pl-c1">/</span><span class="pl-ent">p</span><span class="pl-c1">&gt;</span></div></div></div><div data-key="172" class="child-of-line-43 child-of-line-154  react-code-text react-code-line-contents virtual" style="transform: translateY(3440px); min-height: auto;"><div><div id="LC173" class="react-file-line html-div" data-testid="code-cell" data-line-number="173" inert="inert" style="position: relative;">            <span class="pl-c1">&lt;</span><span class="pl-c1">/</span><span class="pl-ent">div</span><span class="pl-c1">&gt;</span></div></div></div><div data-key="173" class="child-of-line-43 child-of-line-154  react-code-text react-code-line-contents virtual" style="transform: translateY(3460px); min-height: auto;"><div><div id="LC174" class="react-file-line html-div" data-testid="code-cell" data-line-number="174" inert="inert" style="position: relative;">            <span class="pl-c1">&lt;</span><span class="pl-ent">div</span> <span class="pl-c1">className</span><span class="pl-c1">=</span><span class="pl-s">"date-time"</span><span class="pl-c1">&gt;</span></div></div></div><div data-key="174" class="child-of-line-43 child-of-line-154  react-code-text react-code-line-contents virtual" style="transform: translateY(3480px); min-height: auto;"><div><div id="LC175" class="react-file-line html-div" data-testid="code-cell" data-line-number="175" inert="inert" style="position: relative;">              <span class="pl-c1">&lt;</span><span class="pl-ent">div</span> <span class="pl-c1">className</span><span class="pl-c1">=</span><span class="pl-s">"dmy"</span><span class="pl-c1">&gt;</span></div></div></div><div data-key="175" class="child-of-line-43 child-of-line-154  react-code-text react-code-line-contents virtual" style="transform: translateY(3500px); min-height: auto;"><div><div id="LC176" class="react-file-line html-div" data-testid="code-cell" data-line-number="176" inert="inert" style="position: relative;">                <span class="pl-c1">&lt;</span><span class="pl-ent">div</span> <span class="pl-c1">id</span><span class="pl-c1">=</span><span class="pl-s">"txt"</span><span class="pl-c1">&gt;</span><span class="pl-c1">&lt;</span><span class="pl-c1">/</span><span class="pl-ent">div</span><span class="pl-c1">&gt;</span></div></div></div><div data-key="176" class="child-of-line-43 child-of-line-154  react-code-text react-code-line-contents virtual" style="transform: translateY(3520px); min-height: auto;"><div><div id="LC177" class="react-file-line html-div" data-testid="code-cell" data-line-number="177" inert="inert" style="position: relative;">                <span class="pl-c1">&lt;</span><span class="pl-ent">div</span> <span class="pl-c1">className</span><span class="pl-c1">=</span><span class="pl-s">"current-time"</span><span class="pl-c1">&gt;</span></div></div></div><div data-key="177" class="child-of-line-43 child-of-line-154  react-code-text react-code-line-contents virtual" style="transform: translateY(3540px); min-height: auto;"><div><div id="LC178" class="react-file-line html-div" data-testid="code-cell" data-line-number="178" inert="inert" style="position: relative;">                  <span class="pl-c1">&lt;</span><span class="pl-ent">Clock</span> <span class="pl-c1">format</span><span class="pl-c1">=</span><span class="pl-s">"HH:mm:ss"</span> <span class="pl-c1">interval</span><span class="pl-c1">=</span><span class="pl-kos">{</span><span class="pl-c1">1000</span><span class="pl-kos">}</span> <span class="pl-c1">ticking</span><span class="pl-c1">=</span><span class="pl-kos">{</span><span class="pl-c1">true</span><span class="pl-kos">}</span> <span class="pl-c1">/</span><span class="pl-c1">&gt;</span></div></div></div><div data-key="178" class="child-of-line-43 child-of-line-154  react-code-text react-code-line-contents virtual" style="transform: translateY(3560px); min-height: auto;"><div><div id="LC179" class="react-file-line html-div" data-testid="code-cell" data-line-number="179" inert="inert" style="position: relative;">                <span class="pl-c1">&lt;</span><span class="pl-c1">/</span><span class="pl-ent">div</span><span class="pl-c1">&gt;</span></div></div></div><div data-key="179" class="child-of-line-43 child-of-line-154  react-code-text react-code-line-contents virtual" style="transform: translateY(3580px); min-height: auto;"><div><div id="LC180" class="react-file-line html-div" data-testid="code-cell" data-line-number="180" inert="inert" style="position: relative;">                <span class="pl-c1">&lt;</span><span class="pl-ent">div</span> <span class="pl-c1">className</span><span class="pl-c1">=</span><span class="pl-s">"current-date"</span><span class="pl-c1">&gt;</span><span class="pl-kos">{</span><span class="pl-en">dateBuilder</span><span class="pl-kos">(</span><span class="pl-k">new</span> <span class="pl-v">Date</span><span class="pl-kos">(</span><span class="pl-kos">)</span><span class="pl-kos">)</span><span class="pl-kos">}</span><span class="pl-c1">&lt;</span><span class="pl-c1">/</span><span class="pl-ent">div</span><span class="pl-c1">&gt;</span></div></div></div><div data-key="180" class="child-of-line-43 child-of-line-154  react-code-text react-code-line-contents virtual" style="transform: translateY(3600px); min-height: auto;"><div><div id="LC181" class="react-file-line html-div" data-testid="code-cell" data-line-number="181" inert="inert" style="position: relative;">              <span class="pl-c1">&lt;</span><span class="pl-c1">/</span><span class="pl-ent">div</span><span class="pl-c1">&gt;</span></div></div></div><div data-key="181" class="child-of-line-43 child-of-line-154  react-code-text react-code-line-contents virtual" style="transform: translateY(3620px); min-height: auto;"><div><div id="LC182" class="react-file-line html-div" data-testid="code-cell" data-line-number="182" inert="inert" style="position: relative;">              <span class="pl-c1">&lt;</span><span class="pl-ent">div</span> <span class="pl-c1">className</span><span class="pl-c1">=</span><span class="pl-s">"temperature"</span><span class="pl-c1">&gt;</span></div></div></div><div data-key="182" class="child-of-line-43 child-of-line-154  react-code-text react-code-line-contents virtual" style="transform: translateY(3640px); min-height: auto;"><div><div id="LC183" class="react-file-line html-div" data-testid="code-cell" data-line-number="183" inert="inert" style="position: relative;">                <span class="pl-c1">&lt;</span><span class="pl-ent">p</span><span class="pl-c1">&gt;</span></div></div></div><div data-key="183" class="child-of-line-43 child-of-line-154  react-code-text react-code-line-contents virtual" style="transform: translateY(3660px); min-height: auto;"><div><div id="LC184" class="react-file-line html-div" data-testid="code-cell" data-line-number="184" inert="inert" style="position: relative;">                  <span class="pl-kos">{</span><span class="pl-smi">this</span><span class="pl-kos">.</span><span class="pl-c1">state</span><span class="pl-kos">.</span><span class="pl-c1">temperatureC</span><span class="pl-kos">}</span>°<span class="pl-c1">&lt;</span><span class="pl-ent">span</span><span class="pl-c1">&gt;</span>C<span class="pl-c1">&lt;</span><span class="pl-c1">/</span><span class="pl-ent">span</span><span class="pl-c1">&gt;</span></div></div></div><div data-key="184" class="child-of-line-43 child-of-line-154  react-code-text react-code-line-contents virtual" style="transform: translateY(3680px); min-height: auto;"><div><div id="LC185" class="react-file-line html-div" data-testid="code-cell" data-line-number="185" inert="inert" style="position: relative;">                <span class="pl-c1">&lt;</span><span class="pl-c1">/</span><span class="pl-ent">p</span><span class="pl-c1">&gt;</span></div></div></div><div data-key="185" class="child-of-line-43 child-of-line-154  react-code-text react-code-line-contents virtual" style="transform: translateY(3700px); min-height: auto;"><div><div id="LC186" class="react-file-line html-div" data-testid="code-cell" data-line-number="186" inert="inert" style="position: relative;">                <span class="pl-kos">{</span><span class="pl-c">/* &lt;span className="slash"&gt;/&lt;/span&gt;</span></div></div></div><div data-key="186" class="child-of-line-43 child-of-line-154  react-code-text react-code-line-contents virtual" style="transform: translateY(3720px); min-height: auto;"><div><div id="LC187" class="react-file-line html-div" data-testid="code-cell" data-line-number="187" inert="inert" style="position: relative;"><span class="pl-c">                {this.state.temperatureF} &amp;deg;F */</span><span class="pl-kos">}</span></div></div></div><div data-key="187" class="child-of-line-43 child-of-line-154  react-code-text react-code-line-contents virtual" style="transform: translateY(3740px); min-height: auto;"><div><div id="LC188" class="react-file-line html-div" data-testid="code-cell" data-line-number="188" inert="inert" style="position: relative;">              <span class="pl-c1">&lt;</span><span class="pl-c1">/</span><span class="pl-ent">div</span><span class="pl-c1">&gt;</span></div></div></div><div data-key="188" class="child-of-line-43 child-of-line-154  react-code-text react-code-line-contents virtual" style="transform: translateY(3760px); min-height: auto;"><div><div id="LC189" class="react-file-line html-div" data-testid="code-cell" data-line-number="189" inert="inert" style="position: relative;">            <span class="pl-c1">&lt;</span><span class="pl-c1">/</span><span class="pl-ent">div</span><span class="pl-c1">&gt;</span></div></div></div><div data-key="189" class="child-of-line-43 child-of-line-154  react-code-text react-code-line-contents virtual" style="transform: translateY(3780px); min-height: auto;"><div><div id="LC190" class="react-file-line html-div" data-testid="code-cell" data-line-number="190" inert="inert" style="position: relative;">          <span class="pl-c1">&lt;</span><span class="pl-c1">/</span><span class="pl-ent">div</span><span class="pl-c1">&gt;</span></div></div></div><div data-key="190" class="child-of-line-43 child-of-line-154  react-code-text react-code-line-contents virtual" style="transform: translateY(3800px); min-height: auto;"><div><div id="LC191" class="react-file-line html-div" data-testid="code-cell" data-line-number="191" inert="inert" style="position: relative;">          <span class="pl-c1">&lt;</span><span class="pl-ent">Forcast</span> <span class="pl-c1">icon</span><span class="pl-c1">=</span><span class="pl-kos">{</span><span class="pl-smi">this</span><span class="pl-kos">.</span><span class="pl-c1">state</span><span class="pl-kos">.</span><span class="pl-c1">icon</span><span class="pl-kos">}</span> <span class="pl-c1">weather</span><span class="pl-c1">=</span><span class="pl-kos">{</span><span class="pl-smi">this</span><span class="pl-kos">.</span><span class="pl-c1">state</span><span class="pl-kos">.</span><span class="pl-c1">main</span><span class="pl-kos">}</span> <span class="pl-c1">/</span><span class="pl-c1">&gt;</span></div></div></div><div data-key="191" class="child-of-line-43 child-of-line-154  react-code-text react-code-line-contents virtual" style="transform: translateY(3820px); min-height: auto;"><div><div id="LC192" class="react-file-line html-div" data-testid="code-cell" data-line-number="192" inert="inert" style="position: relative;">        <span class="pl-c1">&lt;</span><span class="pl-c1">/</span><span class="pl-v">React</span><span class="pl-kos">.</span><span class="pl-v">Fragment</span><span class="pl-c1">&gt;</span></div></div></div><div data-key="192" class="child-of-line-43 child-of-line-154  react-code-text react-code-line-contents virtual" style="transform: translateY(3840px); min-height: auto;"><div><div id="LC193" class="react-file-line html-div" data-testid="code-cell" data-line-number="193" inert="inert" style="position: relative;">      <span class="pl-kos">)</span><span class="pl-kos">;</span></div></div></div><div data-key="193" class="child-of-line-43 child-of-line-154  react-code-text react-code-line-contents virtual" style="transform: translateY(3860px); min-height: auto;"><div><div id="LC194" class="react-file-line html-div" data-testid="code-cell" data-line-number="194" inert="inert" style="position: relative;">    <span class="pl-kos">}</span> <span class="pl-k">else</span> <span class="pl-kos">{</span></div></div></div><div data-key="194" class="child-of-line-43 child-of-line-154  react-code-text react-code-line-contents virtual" style="transform: translateY(3880px); min-height: auto;"><div><div id="LC195" class="react-file-line html-div" data-testid="code-cell" data-line-number="195" inert="inert" style="position: relative;">      <span class="pl-k">return</span> <span class="pl-kos">(</span></div></div></div><div data-key="195" class="child-of-line-43 child-of-line-154  react-code-text react-code-line-contents virtual" style="transform: translateY(3900px); min-height: auto;"><div><div id="LC196" class="react-file-line html-div" data-testid="code-cell" data-line-number="196" inert="inert" style="position: relative;">        <span class="pl-c1">&lt;</span><span class="pl-v">React</span><span class="pl-kos">.</span><span class="pl-v">Fragment</span><span class="pl-c1">&gt;</span></div></div></div><div data-key="196" class="child-of-line-43 child-of-line-154  react-code-text react-code-line-contents virtual" style="transform: translateY(3920px); min-height: auto;"><div><div id="LC197" class="react-file-line html-div" data-testid="code-cell" data-line-number="197" inert="inert" style="position: relative;">          <span class="pl-c1">&lt;</span><span class="pl-ent">img</span> <span class="pl-c1">src</span><span class="pl-c1">=</span><span class="pl-kos">{</span><span class="pl-s1">loader</span><span class="pl-kos">}</span> <span class="pl-c1">style</span><span class="pl-c1">=</span><span class="pl-kos">{</span><span class="pl-kos">{</span> <span class="pl-c1">width</span>: <span class="pl-s">"50%"</span><span class="pl-kos">,</span> <span class="pl-c1">WebkitUserDrag</span>: <span class="pl-s">"none"</span> <span class="pl-kos">}</span><span class="pl-kos">}</span> <span class="pl-c1">/</span><span class="pl-c1">&gt;</span></div></div></div><div data-key="197" class="child-of-line-43 child-of-line-154  react-code-text react-code-line-contents virtual" style="transform: translateY(3940px); min-height: auto;"><div><div id="LC198" class="react-file-line html-div" data-testid="code-cell" data-line-number="198" inert="inert" style="position: relative;">          <span class="pl-c1">&lt;</span><span class="pl-ent">h3</span> <span class="pl-c1">style</span><span class="pl-c1">=</span><span class="pl-kos">{</span><span class="pl-kos">{</span> <span class="pl-c1">color</span>: <span class="pl-s">"white"</span><span class="pl-kos">,</span> <span class="pl-c1">fontSize</span>: <span class="pl-s">"22px"</span><span class="pl-kos">,</span> <span class="pl-c1">fontWeight</span>: <span class="pl-s">"600"</span> <span class="pl-kos">}</span><span class="pl-kos">}</span><span class="pl-c1">&gt;</span></div></div></div><div data-key="198" class="child-of-line-43 child-of-line-154  react-code-text react-code-line-contents virtual" style="transform: translateY(3960px); min-height: auto;"><div><div id="LC199" class="react-file-line html-div" data-testid="code-cell" data-line-number="199" inert="inert" style="position: relative;">            Detecting your location</div></div></div><div data-key="199" class="child-of-line-43 child-of-line-154  react-code-text react-code-line-contents virtual" style="transform: translateY(3980px); min-height: auto;"><div><div id="LC200" class="react-file-line html-div" data-testid="code-cell" data-line-number="200" inert="inert" style="position: relative;">          <span class="pl-c1">&lt;</span><span class="pl-c1">/</span><span class="pl-ent">h3</span><span class="pl-c1">&gt;</span></div></div></div><div data-key="200" class="child-of-line-43 child-of-line-154  react-code-text react-code-line-contents virtual" style="transform: translateY(4000px); min-height: auto;"><div><div id="LC201" class="react-file-line html-div" data-testid="code-cell" data-line-number="201" inert="inert" style="position: relative;">          <span class="pl-c1">&lt;</span><span class="pl-ent">h3</span> <span class="pl-c1">style</span><span class="pl-c1">=</span><span class="pl-kos">{</span><span class="pl-kos">{</span> <span class="pl-c1">color</span>: <span class="pl-s">"white"</span><span class="pl-kos">,</span> <span class="pl-c1">marginTop</span>: <span class="pl-s">"10px"</span> <span class="pl-kos">}</span><span class="pl-kos">}</span><span class="pl-c1">&gt;</span></div></div></div><div data-key="201" class="child-of-line-43 child-of-line-154  react-code-text react-code-line-contents virtual" style="transform: translateY(4020px); min-height: auto;"><div><div id="LC202" class="react-file-line html-div" data-testid="code-cell" data-line-number="202" inert="inert" style="position: relative;">            Your current location wil be displayed on the App <span class="pl-c1">&lt;</span><span class="pl-ent">br</span><span class="pl-c1">&gt;</span><span class="pl-c1">&lt;</span><span class="pl-c1">/</span><span class="pl-ent">br</span><span class="pl-c1">&gt;</span> &amp; used</div></div></div><div data-key="202" class="child-of-line-43 child-of-line-154  react-code-text react-code-line-contents virtual" style="transform: translateY(4040px); min-height: auto;"><div><div id="LC203" class="react-file-line html-div" data-testid="code-cell" data-line-number="203" inert="inert" style="position: relative;">            for calculating Real time weather.</div></div></div><div data-key="203" class="child-of-line-43 child-of-line-154  react-code-text react-code-line-contents virtual" style="transform: translateY(4060px); min-height: auto;"><div><div id="LC204" class="react-file-line html-div" data-testid="code-cell" data-line-number="204" inert="inert" style="position: relative;">          <span class="pl-c1">&lt;</span><span class="pl-c1">/</span><span class="pl-ent">h3</span><span class="pl-c1">&gt;</span></div></div></div><div data-key="204" class="child-of-line-43 child-of-line-154  react-code-text react-code-line-contents virtual" style="transform: translateY(4080px); min-height: auto;"><div><div id="LC205" class="react-file-line html-div" data-testid="code-cell" data-line-number="205" inert="inert" style="position: relative;">        <span class="pl-c1">&lt;</span><span class="pl-c1">/</span><span class="pl-v">React</span><span class="pl-kos">.</span><span class="pl-v">Fragment</span><span class="pl-c1">&gt;</span></div></div></div><div data-key="205" class="child-of-line-43 child-of-line-154  react-code-text react-code-line-contents virtual" style="transform: translateY(4100px); min-height: auto;"><div><div id="LC206" class="react-file-line html-div" data-testid="code-cell" data-line-number="206" inert="inert" style="position: relative;">      <span class="pl-kos">)</span><span class="pl-kos">;</span></div></div></div><div data-key="206" class="child-of-line-43 child-of-line-154  react-code-text react-code-line-contents virtual" style="transform: translateY(4120px); min-height: auto;"><div><div id="LC207" class="react-file-line html-div" data-testid="code-cell" data-line-number="207" inert="inert" style="position: relative;">    <span class="pl-kos">}</span></div></div></div><div data-key="207" class="child-of-line-43  react-code-text react-code-line-contents virtual" style="transform: translateY(4140px); min-height: auto;"><div><div id="LC208" class="react-file-line html-div" data-testid="code-cell" data-line-number="208" inert="inert" style="position: relative;">  <span class="pl-kos">}</span></div></div></div><div data-key="208" class="react-code-text react-code-line-contents virtual" style="transform: translateY(4160px); min-height: auto;"><div><div id="LC209" class="react-file-line html-div" data-testid="code-cell" data-line-number="209" inert="inert" style="position: relative;"><span class="pl-kos">}</span></div></div></div><div data-key="209" class="react-code-text react-code-line-contents virtual" style="transform: translateY(4180px); min-height: auto;"><div><div id="LC210" class="react-file-line html-div" data-testid="code-cell" data-line-number="210" inert="inert" style="position: relative;">
</div></div></div><div data-key="210" class="react-code-text react-code-line-contents virtual" style="transform: translateY(4200px); min-height: auto;"><div><div id="LC211" class="react-file-line html-div" data-testid="code-cell" data-line-number="211" inert="inert" style="position: relative;"><span class="pl-k">export</span> <span class="pl-k">default</span> <span class="pl-v">Weather</span><span class="pl-kos">;</span></div></div></div></div><button hidden="" data-hotkey="Control+a"></button></div></div><div class="Box-sc-g0xbh4-0 ewSOmp"><div class="Box-sc-g0xbh4-0 fVGZoT"></div></div></div></div><div id="copilot-button-container"></div></div><div id="highlighted-line-menu-container"></div></div></div></section></div></div></div>   </div></div></div><div class="Box-sc-g0xbh4-0"></div></div></div></div></div><div id="find-result-marks-container" class="Box-sc-g0xbh4-0 aZrVR"></div><button hidden="" data-testid="" data-hotkey="Control+F6,Control+Shift+F6" data-hotkey-scope="read-only-cursor-text-area"></button><button hidden="" data-hotkey="Control+F6,Control+Shift+F6"></button></div>   <script type="application/json" id="__PRIMER_DATA_:r0:__">{"resolvedServerColorMode":"day"}</script></div>
</react-app>




  </div>

</turbo-frame>

    </main>
  </div>

  </div>

          <footer class="footer pt-8 pb-6 f6 color-fg-muted p-responsive" role="contentinfo" hidden="">
  <h2 class="sr-only">Footer</h2>

  


  <div class="d-flex flex-justify-center flex-items-center flex-column-reverse flex-lg-row flex-wrap flex-lg-nowrap">
    <div class="d-flex flex-items-center flex-shrink-0 mx-2">
      <a aria-label="Homepage" title="GitHub" class="footer-octicon mr-2" href="https://github.com/">
        <svg aria-hidden="true" height="24" viewBox="0 0 16 16" version="1.1" width="24" data-view-component="true" class="octicon octicon-mark-github">
    <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
</svg>
</a>
      <span>
        © 2024 GitHub,&nbsp;Inc.
      </span>
    </div>

    <nav aria-label="Footer">
      <h3 class="sr-only" id="sr-footer-heading">Footer navigation</h3>

      <ul class="list-style-none d-flex flex-justify-center flex-wrap mb-2 mb-lg-0" aria-labelledby="sr-footer-heading">

          <li class="mx-2">
            <a data-analytics-event="{&quot;category&quot;:&quot;Footer&quot;,&quot;action&quot;:&quot;go to Terms&quot;,&quot;label&quot;:&quot;text:terms&quot;}" href="https://docs.github.com/site-policy/github-terms/github-terms-of-service" data-view-component="true" class="Link--secondary Link">Terms</a>
          </li>

          <li class="mx-2">
            <a data-analytics-event="{&quot;category&quot;:&quot;Footer&quot;,&quot;action&quot;:&quot;go to privacy&quot;,&quot;label&quot;:&quot;text:privacy&quot;}" href="https://docs.github.com/site-policy/privacy-policies/github-privacy-statement" data-view-component="true" class="Link--secondary Link">Privacy</a>
          </li>

          <li class="mx-2">
            <a data-analytics-event="{&quot;category&quot;:&quot;Footer&quot;,&quot;action&quot;:&quot;go to security&quot;,&quot;label&quot;:&quot;text:security&quot;}" href="https://github.com/security" data-view-component="true" class="Link--secondary Link">Security</a>
          </li>

          <li class="mx-2">
            <a data-analytics-event="{&quot;category&quot;:&quot;Footer&quot;,&quot;action&quot;:&quot;go to status&quot;,&quot;label&quot;:&quot;text:status&quot;}" href="https://www.githubstatus.com/" data-view-component="true" class="Link--secondary Link">Status</a>
          </li>

          <li class="mx-2">
            <a data-analytics-event="{&quot;category&quot;:&quot;Footer&quot;,&quot;action&quot;:&quot;go to docs&quot;,&quot;label&quot;:&quot;text:docs&quot;}" href="https://docs.github.com/" data-view-component="true" class="Link--secondary Link">Docs</a>
          </li>

          <li class="mx-2">
            <a data-analytics-event="{&quot;category&quot;:&quot;Footer&quot;,&quot;action&quot;:&quot;go to contact&quot;,&quot;label&quot;:&quot;text:contact&quot;}" href="https://support.github.com/?tags=dotcom-footer" data-view-component="true" class="Link--secondary Link">Contact</a>
          </li>

          <li class="mr-3">
  <cookie-consent-link data-catalyst="">
    <button type="button" class="Link--secondary underline-on-hover border-0 p-0 color-bg-transparent" data-action="click:cookie-consent-link#showConsentManagement">
      Manage cookies
    </button>
  </cookie-consent-link>
</li>

<li class="mr-3">
  <cookie-consent-link data-catalyst="">
    <button type="button" class="Link--secondary underline-on-hover border-0 p-0 color-bg-transparent" data-action="click:cookie-consent-link#showConsentManagement">
      Do not share my personal information
    </button>
  </cookie-consent-link>
</li>

      </ul>
    </nav>
  </div>
</footer>




    <ghcc-consent id="ghcc" class="position-fixed bottom-0 left-0" style="z-index: 999999" data-initial-cookie-consent-allowed="" data-cookie-consent-required="false" data-catalyst=""></ghcc-consent>


  <div id="ajax-error-message" class="ajax-error-message flash flash-error" hidden="">
    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-alert">
    <path d="M6.457 1.047c.659-1.234 2.427-1.234 3.086 0l6.082 11.378A1.75 1.75 0 0 1 14.082 15H1.918a1.75 1.75 0 0 1-1.543-2.575Zm1.763.707a.25.25 0 0 0-.44 0L1.698 13.132a.25.25 0 0 0 .22.368h12.164a.25.25 0 0 0 .22-.368Zm.53 3.996v2.5a.75.75 0 0 1-1.5 0v-2.5a.75.75 0 0 1 1.5 0ZM9 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"></path>
</svg>
    <button type="button" class="flash-close js-ajax-error-dismiss" aria-label="Dismiss error">
      <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-x">
    <path d="M3.72 3.72a.75.75 0 0 1 1.06 0L8 6.94l3.22-3.22a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L9.06 8l3.22 3.22a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L8 9.06l-3.22 3.22a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L6.94 8 3.72 4.78a.75.75 0 0 1 0-1.06Z"></path>
</svg>
    </button>
    You can’t perform that action at this time.
  </div>

    <template id="site-details-dialog"></template>

    <div class="Popover js-hovercard-content position-absolute" style="display: none; outline: none;" tabindex="0">
  <div class="Popover-message Popover-message--bottom-left Popover-message--large Box color-shadow-large" style="width:360px;"></div>
</div>

    <template id="snippet-clipboard-copy-button"></template>
<template id="snippet-clipboard-copy-button-unpositioned"></template>




    </div>

    <div id="js-global-screen-reader-notice" class="sr-only mt-n1" aria-live="polite" aria-atomic="true">weather_app/src/currentLocation.js at main · sayansarkar2001/weather_app · GitHub</div>
    <div id="js-global-screen-reader-notice-assertive" class="sr-only mt-n1" aria-live="assertive" aria-atomic="true"></div>
  


<div class="sr-only mt-n1" id="screenReaderAnnouncementDiv" role="alert" data-testid="screenReaderAnnouncement" aria-live="assertive"></div><div id="__primerPortalRoot__" style="position: absolute; top: 0px; left: 0px;"><div style="position: relative; z-index: 1;"><span role="tooltip" aria-label="Copy path" data-visible-text="Copy path" aria-hidden="true" id=":r2g:" class="ControlledTooltip__TooltipBase-sc-d73eef01-0 bgVydk tooltipped-nw" style="position: absolute; left: 621.115px; top: 200px;"></span></div></div></body></html>