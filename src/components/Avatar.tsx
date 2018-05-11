// import React from 'react';
// import { action } from 'mobx';
// import { observer } from 'mobx-react';
// import uiStore from '~/stores/ui-store';
// import css from 'classnames';
//
// import MaterialIcon from './MaterialIcon';
// import Tooltip from './Tooltip';
//
// /*
//     PROPS           type        description
//     ----------------------------------------
//     className       string
//     size            string      tiny, small, medium (default), large, full
//     clickable       bool
//     tooltip         bool
//
//     contact         string      *
//     username        string      * need one of contact or username
//     ----------------------------------------
// */
//
// @observer
// class Avatar extends React.Component {
//     // When avatar is clickable, click opens ContactProfile dialog
//     @action.bound openContactDialog(ev) {
//         ev.stopPropagation();
//         uiStore.contactDialogUsername = this.props.contact ? this.props.contact.username : this.props.username;
//     }
//
//     render() {
//         const c = this.props.contact || contactStore.getContact(this.props.username);
//
//         let style;
//         if (!c.hasAvatar) {
//             style = { backgroundColor: c.color };
//         }
//
//         let errorIcon;
//         if (c.isDeleted) {
//             errorIcon = <MaterialIcon icon="remove_circle" />;
//         } else if (c.tofuError) {
//             errorIcon = <MaterialIcon icon="error" />;
//         }
//
//         return (
//             <div className="p-avatar">
//                 <div className="contents">
//                     <div
//                         className={css(
//                             'image-container',
//                             this.props.className,
//                             `${this.props.size || 'medium'}`,
//                             { clickable: this.props.clickable }
//                         )}
//                         style={style}
//                         onClick={this.props.clickable && this.openContactDialog}
//                     >
//                         {c.hasAvatar
//                             ? <img src={c.mediumAvatarUrl} alt={c.username} />
//                             : c.letter
//                         }
//                     </div>
//                 </div>
//                 {errorIcon}
//                 {this.props.tooltip
//                     ? <Tooltip
//                         text={c.fullNameAndUsername}
//                         position="top"
//                     />
//                     : null
//                 }
//             </div>
//         );
//     }
// }
//
// module.exports = Avatar;
