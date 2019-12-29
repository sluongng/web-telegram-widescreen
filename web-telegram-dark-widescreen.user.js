// ==UserScript==
// @name         Telegram dark theme / night mode
// @namespace    https://github.com/sluongng/web-telegram-widescreen
// @version      1.0
// @description  Dark theme / night mode for Telegram Web
// @author       Maarten Trompper <maartentrompper@freedom.nl> / Son Luong <sluongng@gmail.com>
// @match        https://web.telegram.org/*
// @grant        GM_addStyle
// ==/UserScript==
GM_addStyle('body { color: #fff;');
GM_addStyle('h1, h2, h3, h4, h5 { color: #fff; }');
GM_addStyle('.md_modal_head { background: #5f5f5f; }');
// GM_addStyle('.im_message_body { background: #4f4f4f; }');
// GM_addStyle('.im_message_out .im_message_body { background: #4f4f4f; }');
GM_addStyle('.im_page_split { background-color: #333; }');
GM_addStyle('.page_wrap { background-color: #232323; color: #fff;}');
GM_addStyle('.im_page_wrap { max-width: initial; background-color: #232323; box-shadow: 0px 1px 0 #2b2b2b; border-left: 1px solid #2b2b2b;border-right: 1px solid #2b2b2b;border-bottom: 1px solid #2b2b2b;}');
GM_addStyle('.im_dialogs_col_wrap { width: 20%; border-right: 2px solid #2b2b2b;}');
GM_addStyle('.tg_head_split { max-width: initial;background-color: #3c3c3c;}');
GM_addStyle('.dropdown.open .tg_head_btn, .tg_head_btn:hover { background-color: #4e4e4e;}');
GM_addStyle('.im_dialogs_scrollable_wrap .active a.im_dialog:hover, .im_dialogs_scrollable_wrap .active a.im_dialog_selected{ background-color: #4e4e4e;}');
GM_addStyle('.im_dialog_peer { color: #eee;}');
GM_addStyle('.im_dialogs_scrollable_wrap .active a.im_dialog { background-color: #3c3c3c;}');
GM_addStyle('.im_dialogs_scrollable_wrap a.im_dialog:hover, .im_dialogs_scrollable_wrap a.im_dialog_selected { background-color: #444444;}');
GM_addStyle('.form-control { background-color: #333; }');

// badges
GM_addStyle('.im_dialog_badge { background: #1e7729;}');
GM_addStyle('.im_dialog_badge_muted { background-color: #444444;}');

// scroll bar
GM_addStyle('.im_history_col .nano > .nano-pane > .nano-slider, .contacts_modal_col .nano > .nano-pane > .nano-slider, .sessions_modal_col .nano > .nano-pane > .nano-slider, .stickerset_modal_col .nano > .nano-pane > .nano-slider, .im_dialogs_modal_col .nano > .nano-pane > .nano-slider { background: rgba(66, 66, 66, 0.5);}');
GM_addStyle('.im_dialogs_col .nano > .nano-pane > .nano-slider { background: rgba(220, 220, 220, 0.3);}');

// selected message
GM_addStyle('.im_message_wrap { max-width: initial; }');
GM_addStyle('.im_message_selected .im_message_outer_wrap { background: #404040; }');
GM_addStyle('.im_history_select_active .im_message_outer_wrap:hover {background: #464646;}');

// make links light blue
GM_addStyle('.im_message_mymention { background: #333333; }');
GM_addStyle('.im_message_author, .im_message_fwd_author { color: #c1e2ff;}');
GM_addStyle('a { color: #c1e2ff;}');
GM_addStyle('a:focus, a:hover { color: #d8edff; }');
GM_addStyle('a.im_dialog .im_dialog_chat_from_wrap, a.im_dialog .im_short_message_media, a.im_dialog .im_short_message_service  { color: #c1e2ff;}');
GM_addStyle('a:focus, a:hover { color: #c1e2ff; }');
GM_addStyle('.im_message_reply_author { color: #c1e2ff; }');

// unread messages banner
GM_addStyle('.im_message_unread_split { background: #444; color: #cacaca;}');

// search field
GM_addStyle('.im_dialogs_search_field { border: 1px solid #333; background-color: #333;}');
GM_addStyle('.im_dialogs_search_field:active, .im_dialogs_search_field:focus{ border: 1px solid #333; background-color: #333;}');
GM_addStyle('.form-control { color: #fff; }');
GM_addStyle('.im_dialogs_scrollable_wrap a.im_dialog_searchpeer, .im_dialogs_scrollable_wrap a.im_dialog_searchpeer:hover, .im_dialogs_scrollable_wrap a.im_dialog_searchpeer_selected { background: #4f4f4f; }');

// input field
GM_addStyle('.composer_rich_textarea:focus, .composer_textarea:focus { box-shadow: 0 2px 0 0 #616161; }');
GM_addStyle('.composer_rich_textarea { overflow-y: hidden; }');
GM_addStyle('.im_record { background: #4f4f4f; }');
GM_addStyle('.composer_autocomplete_option_active a.composer_command_option .composer_command_desc, a.composer_command_option:hover .composer_command_desc { color: #fff; }');
GM_addStyle('.im_record_bg { position: absolute; margin: -3px 0px 0px -9px; padding: 5px 2px 5px 5px; width: 35px; height: 35px; border-radius: 50px; overflow: hidden; background: #333; transition: background-color linear 0.2s;}');
// popup
GM_addStyle('.modal-content { background-color: #2f2f2f;}');
GM_addStyle('a.tg_checkbox, p.tg_checkbox { color: #fff;');

// dropdown menu
GM_addStyle('.dropdown-menu { background-color: #404040; }');
GM_addStyle('.dropdown-menu>li>a:focus, .dropdown-menu>li>a:hover { background-color: #545454; }');
GM_addStyle('.tg_head_logo_dropdown .dropdown-menu > li > a:hover { background: #545454; }')
GM_addStyle('.tg_head_logo_dropdown .dropdown-menu > li > a {color: #fff;}')
GM_addStyle('.tg_head_logo_dropdown .dropdown-menu { border-left-color: #383838; border-right-color: #383838; -webkit-box-shadow: 0px 1px 3px 0px rgba(78, 78, 78, 0.27); -moz-box-shadow: 0px 1px 3px 0px rgba(60, 75, 87, 0.27); box-shadow: 0px 1px 3px 0px rgba(39, 39, 39, 0.27); }')
GM_addStyle('.icon-new-group {-webkit-filter: brightness(0) invert(1); filter: brightness(0) invert(1);}');
GM_addStyle('.icon-contacts {-webkit-filter: brightness(0) invert(1); filter: brightness(0) invert(1);}');
GM_addStyle('.icon-settings {-webkit-filter: brightness(0) invert(1); filter: brightness(0) invert(1);}');
GM_addStyle('.icon-faq {-webkit-filter: brightness(0) invert(1); filter: brightness(0) invert(1);}');
GM_addStyle('.icon-about {-webkit-filter: brightness(0) invert(1); filter: brightness(0) invert(1);}');

// settings
GM_addStyle('a.tg_radio { color: #fff; }');

// chat dropwdown
GM_addStyle('.tg_head_peer_dropdown .dropdown-menu > li > a { color: #fff; }');
GM_addStyle('.tg_head_peer_dropdown .dropdown-menu { border: 1px solid rgba(64, 64, 64, 0.2); -webkit-box-shadow: 0px 0px 2px 0px rgb(45, 45, 45); -moz-box-shadow: 0px 0px 2px 0px rgb(45, 45, 45); box-shadow: 0px 0px 2px 0px rgb(45, 45, 45); }');
GM_addStyle('.tg_head_peer_dropdown .dropdown-menu > li > a:hover {background-color: ##545454;}');
GM_addStyle('.dropdown-menu>li>a {color: #fff;}');

// emoji
GM_addStyle('.composer_emoji_tooltip.noselect.composer_emoji_tooltip_shown { background-color: #252525; }');
GM_addStyle('.composer_emoji_tooltip{border: 1px solid #252525;}');
GM_addStyle('.icon-tooltip-tail { background: #252525; border: 1px solid #252525;}');
GM_addStyle('.md_modal_section_splitter { background-color: #303030; }');
GM_addStyle('.composer_emoji_tooltip_tab_shadow { width: 50%; height: 1px; background: #ffffff; -webkit-box-shadow: 0 1px 0 0 #ffffff; -moz-box-shadow: 0 1px 0 0 #53a9ea; box-shadow: 0 1px 0 0 #ffffff;}');
GM_addStyle('.composer_stickerset_title { color: #fff; }');
GM_addStyle('.composer_emoji_tooltip_tab_emoji, .composer_emoji_tooltip_tabs_stickers_active .composer_emoji_tooltip_tab_stickers {color: #fff;}');
GM_addStyle('.composer_emoji_tooltip_category i { filter: brightness(0) invert(1); }');
GM_addStyle('.tg_head_peer_dropdown .dropdown-menu > li > a:hover { background: #545454; }');

// sticker popup in text field
GM_addStyle('.composer_dropdown_wrap { background: #5f5f5f; }');

// commands
GM_addStyle('.composer_dropdown .composer_command_desc { color: #fff; }');
GM_addStyle('.composer_dropdown .composer_command_value { color: #252525; }');
GM_addStyle('.composer_dropdown li a:hover, .composer_dropdown li.composer_autocomplete_option_active a { background: #4f4f4f; }');

// mentions
GM_addStyle('.composer_dropdown>li>a { color: #c1e2ff; }');
GM_addStyle('.composer_user_mention { color: #fff; }');
GM_addStyle('.composer_dropdown_wrap { background: #4f4f4f; }');

// contacts
GM_addStyle('.contacts_modal_members_list a.contacts_modal_contact { color: #fff; }');
GM_addStyle('a.mobile_modal_action, span.mobile_modal_action { color: #fff; }');
GM_addStyle('.contacts_modal_members_list .active a.contacts_modal_contact, .contacts_modal_members_list .active a.contacts_modal_contact:hover, .contacts_modal_members_list a.contacts_modal_contact:hover { background: #454545; }');

// Message focus animation (click message from search)
GM_addStyle('@keyframes im_message_focus_fade { from { background-color: #212223; } to { background-color: rgba(242,246,250,0) } }');

GM_addStyle('.telegram_modal_logo{ filter: contrast(33) grayscale(); }');
