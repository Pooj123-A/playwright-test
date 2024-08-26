
import { test, expect } from "@playwright/experimental-ct-react";
import App1560 from "./App1560.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1560 />);
  await expect(component).toContainText("Learn React");
});
