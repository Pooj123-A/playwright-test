
import { test, expect } from "@playwright/experimental-ct-react";
import App1579 from "./App1579.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1579 />);
  await expect(component).toContainText("Learn React");
});
