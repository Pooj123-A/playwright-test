
import { test, expect } from "@playwright/experimental-ct-react";
import App1703 from "./App1703.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1703 />);
  await expect(component).toContainText("Learn React");
});
