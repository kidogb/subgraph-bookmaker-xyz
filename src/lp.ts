import {
  lpAdminChanged as lpAdminChangedEvent,
  lpBeaconUpgraded as lpBeaconUpgradedEvent,
  lpUpgraded as lpUpgradedEvent
} from "../generated/lp/lp"
import {
  lpAdminChanged,
  lpBeaconUpgraded,
  lpUpgraded
} from "../generated/schema"

export function handlelpAdminChanged(event: lpAdminChangedEvent): void {
  let entity = new lpAdminChanged(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.previousAdmin = event.params.previousAdmin
  entity.newAdmin = event.params.newAdmin
  entity.save()
}

export function handlelpBeaconUpgraded(event: lpBeaconUpgradedEvent): void {
  let entity = new lpBeaconUpgraded(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.beacon = event.params.beacon
  entity.save()
}

export function handlelpUpgraded(event: lpUpgradedEvent): void {
  let entity = new lpUpgraded(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.implementation = event.params.implementation
  entity.save()
}
