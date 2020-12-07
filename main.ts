/**
 * IR remote
 */
//% color=50 weight=0
//% icon="\uf1eb"
namespace IR {
  /**
     *  Lorsque le bouton de la telecommande du robot mbot est appuyé. Attention à initialiser le port du recepteur infrarouge.
   */
  //% blockId=ir_init
  //% block="Initialiser le capteur infrarouge sur %pin"
  //% shim=IR::init
  export function init(pin: Pins): void {
    return
  }

  /**
     * initialiser infrarouge (portail automatique sur P13)
     */
  //% blockId=ir_received_event
  //% block="Lorsque le signal du bouton |%btn| de la télécommande est reçu"
  //% shim=IR::onPressEvent
  export function onPressEvent(btn: RemoteButton, body:Action): void {
    return
  }
}
