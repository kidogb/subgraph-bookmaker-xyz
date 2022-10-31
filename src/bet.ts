import {
  betAdminChanged as betAdminChangedEvent,
  betBeaconUpgraded as betBeaconUpgradedEvent,
  betUpgraded as betUpgradedEvent
} from "../generated/bet/bet"
import {
  betAdminChanged,
  betBeaconUpgraded,
  betUpgraded
} from "../generated/schema"

export function handlebetAdminChanged(event: betAdminChangedEvent): void {
  let entity = new betAdminChanged(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.previousAdmin = event.params.previousAdmin
  entity.newAdmin = event.params.newAdmin
  entity.save()
}

export function handlebetBeaconUpgraded(event: betBeaconUpgradedEvent): void {
  let entity = new betBeaconUpgraded(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.beacon = event.params.beacon
  entity.save()
}

export function handlebetUpgraded(event: betUpgradedEvent): void {
  let entity = new betUpgraded(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.implementation = event.params.implementation
  entity.save()
}
