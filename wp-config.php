<?php
/**
 * Основные параметры WordPress.
 *
 * Скрипт для создания wp-config.php использует этот файл в процессе
 * установки. Необязательно использовать веб-интерфейс, можно
 * скопировать файл в "wp-config.php" и заполнить значения вручную.
 *
 * Этот файл содержит следующие параметры:
 *
 * * Настройки MySQL
 * * Секретные ключи
 * * Префикс таблиц базы данных
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** Параметры MySQL: Эту информацию можно получить у вашего хостинг-провайдера ** //
/** Имя базы данных для WordPress */
define( 'DB_NAME', 'savigor' );

/** Имя пользователя MySQL */
define( 'DB_USER', 'savigor_admin' );

/** Пароль к базе данных MySQL */
define( 'DB_PASSWORD', 'admin' );

/** Имя сервера MySQL */
define( 'DB_HOST', 'localhost' );

/** Кодировка базы данных для создания таблиц. */
define( 'DB_CHARSET', 'utf8mb4' );

/** Схема сопоставления. Не меняйте, если не уверены. */
define( 'DB_COLLATE', '' );

/**#@+
 * Уникальные ключи и соли для аутентификации.
 *
 * Смените значение каждой константы на уникальную фразу.
 * Можно сгенерировать их с помощью {@link https://api.wordpress.org/secret-key/1.1/salt/ сервиса ключей на WordPress.org}
 * Можно изменить их, чтобы сделать существующие файлы cookies недействительными. Пользователям потребуется авторизоваться снова.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'MY:={*b.EkNt0,/ZWCMuH#`k|Yj8mJ)$9mW2??~H&G2WXBJg!,3d;~Lg{}yl8 @I' );
define( 'SECURE_AUTH_KEY',  ',Pe_Yd7_r_p%<O(pF^:7;j@,CJ+F:|a9i/AKrPoC<O;3ASv2i01&9Y/P=C99Ah,l' );
define( 'LOGGED_IN_KEY',    '9drK~9:VCe7lN5^i2ENO0g`n7(-e6SgD!}@!f`fE{|j</I:%HSbs08c5YlJ_1#xr' );
define( 'NONCE_KEY',        '%xt$3V#zTV>;{U6>ib$1qxMarL7|,I6Nw[sf Cd^++l?`CV+W]j*/~w{Bi,S^d.~' );
define( 'AUTH_SALT',        'T,L/it_ >p&r>$#r(Sr2=%8Q&zH=r{Z?M`$xiT]o)N=NhC`0^Y.OlV,qTLd:P,%x' );
define( 'SECURE_AUTH_SALT', 'RWj}[ 7/(&vXukm^)rp hAeo[P75u!V*-sk `9 !ew1pQ5 *.<F))p^16~vu?kPC' );
define( 'LOGGED_IN_SALT',   'nT%+||<z/};@7U9TbTtK|8dmZeEj5:i<]1&^;rJA`rAj]!jn.hc!Rp:x[]:q,b1i' );
define( 'NONCE_SALT',       '%XM)H3+d5Jojlx$_tKuQe9Mn:x9-vXH<[RIYj;VdMPmoi5K^; y(~R]mbs5|saXE' );

/**#@-*/

/**
 * Префикс таблиц в базе данных WordPress.
 *
 * Можно установить несколько сайтов в одну базу данных, если использовать
 * разные префиксы. Пожалуйста, указывайте только цифры, буквы и знак подчеркивания.
 */
$table_prefix = 'wp_';

/**
 * Для разработчиков: Режим отладки WordPress.
 *
 * Измените это значение на true, чтобы включить отображение уведомлений при разработке.
 * Разработчикам плагинов и тем настоятельно рекомендуется использовать WP_DEBUG
 * в своём рабочем окружении.
 *
 * Информацию о других отладочных константах можно найти в Кодексе.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define( 'WP_DEBUG', false );

/* Это всё, дальше не редактируем. Успехов! */

/** Абсолютный путь к директории WordPress. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Инициализирует переменные WordPress и подключает файлы. */
require_once( ABSPATH . 'wp-settings.php' );
