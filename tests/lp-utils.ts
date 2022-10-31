import { newMockEvent } from "matchstick-as"
import { ethereum, Address } from "@graphprotocol/graph-ts"
import {
  lpAdminChanged,
  lpBeaconUpgraded,
  lpUpgraded
} from "../generated/lp/lp"

export function createlpAdminChangedEvent(
  previousAdmin: Address,
  newAdmin: Address
): lpAdminChanged {
  let lpAdminChangedEvent = changetype<lpAdminChanged>(newMockEvent())

  lpAdminChangedEvent.parameters = new Array()

  lpAdminChangedEvent.parameters.push(
    new ethereum.EventParam(
      "previousAdmin",
      ethereum.Value.fromAddress(previousAdmin)
    )
  )
  lpAdminChangedEvent.parameters.push(
    new ethereum.EventParam("newAdmin", ethereum.Value.fromAddress(newAdmin))
  )

  return lpAdminChangedEvent
}

export function createlpBeaconUpgradedEvent(beacon: Address): lpBeaconUpgraded {
  let lpBeaconUpgradedEvent = changetype<lpBeaconUpgraded>(newMockEvent())

  lpBeaconUpgradedEvent.parameters = new Array()

  lpBeaconUpgradedEvent.parameters.push(
    new ethereum.EventParam("beacon", ethereum.Value.fromAddress(beacon))
  )

  return lpBeaconUpgradedEvent
}

export function createlpUpgradedEvent(implementation: Address): lpUpgraded {
  let lpUpgradedEvent = changetype<lpUpgraded>(newMockEvent())

  lpUpgradedEvent.parameters = new Array()

  lpUpgradedEvent.parameters.push(
    new ethereum.EventParam(
      "implementation",
      ethereum.Value.fromAddress(implementation)
    )
  )

  return lpUpgradedEvent
}
