
import { test, expect } from "@playwright/experimental-ct-react";
import App1852 from "./App1852.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1852 />);
  await expect(component).toContainText("Learn React");
});
