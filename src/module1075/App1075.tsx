
import { test, expect } from "@playwright/experimental-ct-react";
import App1075 from "./App1075.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1075 />);
  await expect(component).toContainText("Learn React");
});
