
import { test, expect } from "@playwright/experimental-ct-react";
import App1144 from "./App1144.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1144 />);
  await expect(component).toContainText("Learn React");
});
