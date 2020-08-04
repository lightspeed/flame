# Flame Icons

Icons used across LightSpeed products

This package only provides the raw SVG files as well as a spritesheet.

## How to use individual icons

Each icons are available within the `src` directory. All icons are prefixed by the `icon-` keyword.

If you are within a context where you can import SVGs via import statements (you may need to include https://webpack.js.org/loaders/svg-inline-loader/), you may do the following:

```js
import AddSVG from '@lightspeed/flame-icons/src/icon-add.svg';
// ...
<AddSVG />;
```

## Using the spritesheet

Icons are available as a spritesheet. To add a spritesheet to an app, you can import it directly from your
node_modules or use an appropriate webpack-loader (such as https://webpack.js.org/loaders/svg-inline-loader/).

```html
<!--Including the spritesheet via the img tag-->
<img src="./node_modules/@lightspeed/flame-icons/src/spritesheet.svg" />
```

## How to contribute

Simply add your icon to the `src` directory and ensure the name of the new icon follows the convention of
being prefixed with the `icon-keyword`.

Once that's done, please run `yarn regenerate-readme` and preview the README.md file to see if the icon renders correctly.

<!-- Everything underneath here is auto generated. Don't touch! -->

### Icon Preview

| Icon Name              | Preview                                             |
| ---------------------- | --------------------------------------------------- |
| add                    | <img src="./src/icon-add.svg" />                    |
| apple                  | <img src="./src/icon-apple.svg" />                  |
| apps-purchased         | <img src="./src/icon-apps-purchased.svg" />         |
| apps                   | <img src="./src/icon-apps.svg" />                   |
| arrow-bent-down-left   | <img src="./src/icon-arrow-bent-down-left.svg" />   |
| arrow-bent-down-right  | <img src="./src/icon-arrow-bent-down-right.svg" />  |
| arrow-bent-up-left     | <img src="./src/icon-arrow-bent-up-left.svg" />     |
| arrow-bent-up-right    | <img src="./src/icon-arrow-bent-up-right.svg" />    |
| arrow-down-left        | <img src="./src/icon-arrow-down-left.svg" />        |
| arrow-down-right       | <img src="./src/icon-arrow-down-right.svg" />       |
| arrow-down             | <img src="./src/icon-arrow-down.svg" />             |
| arrow-left             | <img src="./src/icon-arrow-left.svg" />             |
| arrow-right            | <img src="./src/icon-arrow-right.svg" />            |
| arrow-up-left          | <img src="./src/icon-arrow-up-left.svg" />          |
| arrow-up-right         | <img src="./src/icon-arrow-up-right.svg" />         |
| arrow-up               | <img src="./src/icon-arrow-up.svg" />               |
| barcode-1d             | <img src="./src/icon-barcode-1d.svg" />             |
| barcode                | <img src="./src/icon-barcode.svg" />                |
| blogs                  | <img src="./src/icon-blogs.svg" />                  |
| brands-missing         | <img src="./src/icon-brands-missing.svg" />         |
| brands                 | <img src="./src/icon-brands.svg" />                 |
| business               | <img src="./src/icon-business.svg" />               |
| calendar               | <img src="./src/icon-calendar.svg" />               |
| cash-outline           | <img src="./src/icon-cash-outline.svg" />           |
| cash                   | <img src="./src/icon-cash.svg" />                   |
| categories             | <img src="./src/icon-categories.svg" />             |
| cc-amex                | <img src="./src/icon-cc-amex.svg" />                |
| cc-debit               | <img src="./src/icon-cc-debit.svg" />               |
| cc-diners-club         | <img src="./src/icon-cc-diners-club.svg" />         |
| cc-discover            | <img src="./src/icon-cc-discover.svg" />            |
| cc-generic-outline     | <img src="./src/icon-cc-generic-outline.svg" />     |
| cc-generic             | <img src="./src/icon-cc-generic.svg" />             |
| cc-interac             | <img src="./src/icon-cc-interac.svg" />             |
| cc-jcb                 | <img src="./src/icon-cc-jcb.svg" />                 |
| cc-mastercard          | <img src="./src/icon-cc-mastercard.svg" />          |
| cc-missing             | <img src="./src/icon-cc-missing.svg" />             |
| cc-union-pay           | <img src="./src/icon-cc-union-pay.svg" />           |
| cc-unknown             | <img src="./src/icon-cc-unknown.svg" />             |
| cc-visa                | <img src="./src/icon-cc-visa.svg" />                |
| chat                   | <img src="./src/icon-chat.svg" />                   |
| checkmark              | <img src="./src/icon-checkmark.svg" />              |
| cheque                 | <img src="./src/icon-cheque.svg" />                 |
| chevron-down           | <img src="./src/icon-chevron-down.svg" />           |
| chevron-left           | <img src="./src/icon-chevron-left.svg" />           |
| chevron-right          | <img src="./src/icon-chevron-right.svg" />          |
| chevron-up-down        | <img src="./src/icon-chevron-up-down.svg" />        |
| chevron-up             | <img src="./src/icon-chevron-up.svg" />             |
| clipboard              | <img src="./src/icon-clipboard.svg" />              |
| clock-outline          | <img src="./src/icon-clock-outline.svg" />          |
| clock                  | <img src="./src/icon-clock.svg" />                  |
| close                  | <img src="./src/icon-close.svg" />                  |
| content-templates      | <img src="./src/icon-content-templates.svg" />      |
| content                | <img src="./src/icon-content.svg" />                |
| cross                  | <img src="./src/icon-cross.svg" />                  |
| custom-fields          | <img src="./src/icon-custom-fields.svg" />          |
| customer-groups        | <img src="./src/icon-customer-groups.svg" />        |
| customers              | <img src="./src/icon-customers.svg" />              |
| danger                 | <img src="./src/icon-danger.svg" />                 |
| dashboard              | <img src="./src/icon-dashboard.svg" />              |
| delete                 | <img src="./src/icon-delete.svg" />                 |
| design                 | <img src="./src/icon-design.svg" />                 |
| desktop                | <img src="./src/icon-desktop.svg" />                |
| devices                | <img src="./src/icon-devices.svg" />                |
| discount-codes         | <img src="./src/icon-discount-codes.svg" />         |
| discount-rules         | <img src="./src/icon-discount-rules.svg" />         |
| domains                | <img src="./src/icon-domains.svg" />                |
| download               | <img src="./src/icon-download.svg" />               |
| ecom-am                | <img src="./src/icon-ecom-am.svg" />                |
| ecom-as                | <img src="./src/icon-ecom-as.svg" />                |
| ecom-eu                | <img src="./src/icon-ecom-eu.svg" />                |
| edit                   | <img src="./src/icon-edit.svg" />                   |
| establishments         | <img src="./src/icon-establishments.svg" />         |
| export                 | <img src="./src/icon-export.svg" />                 |
| external-link          | <img src="./src/icon-external-link.svg" />          |
| eye-off                | <img src="./src/icon-eye-off.svg" />                |
| eye-on                 | <img src="./src/icon-eye-on.svg" />                 |
| facebook               | <img src="./src/icon-facebook.svg" />               |
| faq                    | <img src="./src/icon-faq.svg" />                    |
| feat-categories        | <img src="./src/icon-feat-categories.svg" />        |
| feat-products          | <img src="./src/icon-feat-products.svg" />          |
| files                  | <img src="./src/icon-files.svg" />                  |
| filters                | <img src="./src/icon-filters.svg" />                |
| floors                 | <img src="./src/icon-floors.svg" />                 |
| giftcard-outline       | <img src="./src/icon-giftcard-outline.svg" />       |
| giftcard               | <img src="./src/icon-giftcard.svg" />               |
| grid                   | <img src="./src/icon-grid.svg" />                   |
| hallmarks              | <img src="./src/icon-hallmarks.svg" />              |
| hamburger              | <img src="./src/icon-hamburger.svg" />              |
| hardware               | <img src="./src/icon-hardware.svg" />               |
| headlines              | <img src="./src/icon-headlines.svg" />              |
| help                   | <img src="./src/icon-help.svg" />                   |
| home                   | <img src="./src/icon-home.svg" />                   |
| image                  | <img src="./src/icon-image.svg" />                  |
| images                 | <img src="./src/icon-images.svg" />                 |
| import                 | <img src="./src/icon-import.svg" />                 |
| info                   | <img src="./src/icon-info.svg" />                   |
| inventory              | <img src="./src/icon-inventory.svg" />              |
| item-missing           | <img src="./src/icon-item-missing.svg" />           |
| item-outline           | <img src="./src/icon-item-outline.svg" />           |
| item                   | <img src="./src/icon-item.svg" />                   |
| languages              | <img src="./src/icon-languages.svg" />              |
| list                   | <img src="./src/icon-list.svg" />                   |
| location               | <img src="./src/icon-location.svg" />               |
| lock-closed            | <img src="./src/icon-lock-closed.svg" />            |
| lock-open              | <img src="./src/icon-lock-open.svg" />              |
| logout                 | <img src="./src/icon-logout.svg" />                 |
| mail                   | <img src="./src/icon-mail.svg" />                   |
| math-add               | <img src="./src/icon-math-add.svg" />               |
| math-divide            | <img src="./src/icon-math-divide.svg" />            |
| math-multiply          | <img src="./src/icon-math-multiply.svg" />          |
| math-subtract          | <img src="./src/icon-math-subtract.svg" />          |
| mobile                 | <img src="./src/icon-mobile.svg" />                 |
| money-sent             | <img src="./src/icon-money-sent.svg" />             |
| navigation             | <img src="./src/icon-navigation.svg" />             |
| no-pay                 | <img src="./src/icon-no-pay.svg" />                 |
| note                   | <img src="./src/icon-note.svg" />                   |
| notification           | <img src="./src/icon-notification.svg" />           |
| orders                 | <img src="./src/icon-orders.svg" />                 |
| pages                  | <img src="./src/icon-pages.svg" />                  |
| payments               | <img src="./src/icon-payments.svg" />               |
| phone                  | <img src="./src/icon-phone.svg" />                  |
| pin                    | <img src="./src/icon-pin.svg" />                    |
| plan                   | <img src="./src/icon-plan.svg" />                   |
| power                  | <img src="./src/icon-power.svg" />                  |
| printers               | <img src="./src/icon-printers.svg" />               |
| product-options        | <img src="./src/icon-product-options.svg" />        |
| products-resto         | <img src="./src/icon-products-resto.svg" />         |
| products               | <img src="./src/icon-products.svg" />               |
| quotes                 | <img src="./src/icon-quotes.svg" />                 |
| receipt-printer        | <img src="./src/icon-receipt-printer.svg" />        |
| receipt                | <img src="./src/icon-receipt.svg" />                |
| register               | <img src="./src/icon-register.svg" />               |
| remove                 | <img src="./src/icon-remove.svg" />                 |
| returns                | <img src="./src/icon-returns.svg" />                |
| reviews                | <img src="./src/icon-reviews.svg" />                |
| row-handle             | <img src="./src/icon-row-handle.svg" />             |
| search                 | <img src="./src/icon-search.svg" />                 |
| settings               | <img src="./src/icon-settings.svg" />               |
| shipments              | <img src="./src/icon-shipments.svg" />              |
| shop                   | <img src="./src/icon-shop.svg" />                   |
| slice                  | <img src="./src/icon-slice.svg" />                  |
| small-arrow-down-left  | <img src="./src/icon-small-arrow-down-left.svg" />  |
| small-arrow-down-right | <img src="./src/icon-small-arrow-down-right.svg" /> |
| small-arrow-down       | <img src="./src/icon-small-arrow-down.svg" />       |
| small-arrow-left       | <img src="./src/icon-small-arrow-left.svg" />       |
| small-arrow-right      | <img src="./src/icon-small-arrow-right.svg" />      |
| small-arrow-up-left    | <img src="./src/icon-small-arrow-up-left.svg" />    |
| small-arrow-up-right   | <img src="./src/icon-small-arrow-up-right.svg" />   |
| small-arrow-up         | <img src="./src/icon-small-arrow-up.svg" />         |
| small-chevron-down     | <img src="./src/icon-small-chevron-down.svg" />     |
| small-chevron-left     | <img src="./src/icon-small-chevron-left.svg" />     |
| small-chevron-right    | <img src="./src/icon-small-chevron-right.svg" />    |
| small-chevron-up       | <img src="./src/icon-small-chevron-up.svg" />       |
| sort-asc               | <img src="./src/icon-sort-asc.svg" />               |
| sort-desc              | <img src="./src/icon-sort-desc.svg" />              |
| specifications         | <img src="./src/icon-specifications.svg" />         |
| spinner                | <img src="./src/icon-spinner.svg" />                |
| ssl                    | <img src="./src/icon-ssl.svg" />                    |
| star-empty             | <img src="./src/icon-star-empty.svg" />             |
| star-half              | <img src="./src/icon-star-half.svg" />              |
| star                   | <img src="./src/icon-star.svg" />                   |
| statistics             | <img src="./src/icon-statistics.svg" />             |
| subscription           | <img src="./src/icon-subscription.svg" />           |
| suppliers              | <img src="./src/icon-suppliers.svg" />              |
| support-tickets        | <img src="./src/icon-support-tickets.svg" />        |
| sync                   | <img src="./src/icon-sync.svg" />                   |
| tablet                 | <img src="./src/icon-tablet.svg" />                 |
| theme-editor           | <img src="./src/icon-theme-editor.svg" />           |
| tools                  | <img src="./src/icon-tools.svg" />                  |
| translations           | <img src="./src/icon-translations.svg" />           |
| unlink                 | <img src="./src/icon-unlink.svg" />                 |
| upload                 | <img src="./src/icon-upload.svg" />                 |
| usb-plug               | <img src="./src/icon-usb-plug.svg" />               |
| users                  | <img src="./src/icon-users.svg" />                  |
| verified               | <img src="./src/icon-verified.svg" />               |
| warning                | <img src="./src/icon-warning.svg" />                |
| wifi                   | <img src="./src/icon-wifi.svg" />                   |
| windows                | <img src="./src/icon-windows.svg" />                |
| zoom-in                | <img src="./src/icon-zoom-in.svg" />                |
| zoom-out               | <img src="./src/icon-zoom-out.svg" />               |
