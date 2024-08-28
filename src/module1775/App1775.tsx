
import { test, expect } from "@playwright/experimental-ct-react";
import App1775 from "./App1775.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1775 />);
  await expect(component).toContainText("Learn React");
});
