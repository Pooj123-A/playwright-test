
import { test, expect } from "@playwright/experimental-ct-react";
import App1019 from "./App1019.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1019 />);
  await expect(component).toContainText("Learn React");
});
