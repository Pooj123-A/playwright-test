
import { test, expect } from "@playwright/experimental-ct-react";
import App640 from "./App640.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App640 />);
  await expect(component).toContainText("Learn React");
});
