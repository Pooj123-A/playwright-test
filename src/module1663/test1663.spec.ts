
import { test, expect } from "@playwright/experimental-ct-react";
import App1663 from "./App1663.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1663 />);
  await expect(component).toContainText("Learn React");
});
