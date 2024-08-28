
import { test, expect } from "@playwright/experimental-ct-react";
import App1897 from "./App1897.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1897 />);
  await expect(component).toContainText("Learn React");
});
