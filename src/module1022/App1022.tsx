
import { test, expect } from "@playwright/experimental-ct-react";
import App1022 from "./App1022.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1022 />);
  await expect(component).toContainText("Learn React");
});
