
import { test, expect } from "@playwright/experimental-ct-react";
import App1240 from "./App1240.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1240 />);
  await expect(component).toContainText("Learn React");
});
