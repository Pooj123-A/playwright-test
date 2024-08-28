
import { test, expect } from "@playwright/experimental-ct-react";
import App1779 from "./App1779.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1779 />);
  await expect(component).toContainText("Learn React");
});
