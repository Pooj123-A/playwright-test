
import { test, expect } from "@playwright/experimental-ct-react";
import App1633 from "./App1633.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1633 />);
  await expect(component).toContainText("Learn React");
});
