
import { test, expect } from "@playwright/experimental-ct-react";
import App1621 from "./App1621.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1621 />);
  await expect(component).toContainText("Learn React");
});
