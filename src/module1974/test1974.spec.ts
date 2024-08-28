
import { test, expect } from "@playwright/experimental-ct-react";
import App1974 from "./App1974.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1974 />);
  await expect(component).toContainText("Learn React");
});
