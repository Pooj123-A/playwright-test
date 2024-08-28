
import { test, expect } from "@playwright/experimental-ct-react";
import App1574 from "./App1574.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1574 />);
  await expect(component).toContainText("Learn React");
});
