import { newMockEvent } from "matchstick-as"
import { ethereum, Address } from "@graphprotocol/graph-ts"
import {
  betAdminChanged,
  betBeaconUpgraded,
  betUpgraded
} from "../generated/bet/bet"

export function createbetAdminChangedEvent(
  previousAdmin: Address,
  newAdmin: Address
): betAdminChanged {
  let betAdminChangedEvent = changetype<betAdminChanged>(newMockEvent())

  betAdminChangedEvent.parameters = new Array()

  betAdminChangedEvent.parameters.push(
    new ethereum.EventParam(
      "previousAdmin",
      ethereum.Value.fromAddress(previousAdmin)
    )
  )
  betAdminChangedEvent.parameters.push(
    new ethereum.EventParam("newAdmin", ethereum.Value.fromAddress(newAdmin))
  )

  return betAdminChangedEvent
}

export function createbetBeaconUpgradedEvent(
  beacon: Address
): betBeaconUpgraded {
  let betBeaconUpgradedEvent = changetype<betBeaconUpgraded>(newMockEvent())

  betBeaconUpgradedEvent.parameters = new Array()

  betBeaconUpgradedEvent.parameters.push(
    new ethereum.EventParam("beacon", ethereum.Value.fromAddress(beacon))
  )

  return betBeaconUpgradedEvent
}

export function createbetUpgradedEvent(implementation: Address): betUpgraded {
  let betUpgradedEvent = changetype<betUpgraded>(newMockEvent())

  betUpgradedEvent.parameters = new Array()

  betUpgradedEvent.parameters.push(
    new ethereum.EventParam(
      "implementation",
      ethereum.Value.fromAddress(implementation)
    )
  )

  return betUpgradedEvent
}
