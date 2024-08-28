
import { test, expect } from "@playwright/experimental-ct-react";
import App1891 from "./App1891.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1891 />);
  await expect(component).toContainText("Learn React");
});
