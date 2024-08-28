
import { test, expect } from "@playwright/experimental-ct-react";
import App1884 from "./App1884.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1884 />);
  await expect(component).toContainText("Learn React");
});
