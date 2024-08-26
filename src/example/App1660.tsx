
import { test, expect } from "@playwright/experimental-ct-react";
import App1660 from "./App1660.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1660 />);
  await expect(component).toContainText("Learn React");
});
