
import { test, expect } from "@playwright/experimental-ct-react";
import App1973 from "./App1973.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1973 />);
  await expect(component).toContainText("Learn React");
});
