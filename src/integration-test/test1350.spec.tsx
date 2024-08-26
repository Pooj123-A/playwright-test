
import { test, expect } from "@playwright/experimental-ct-react";
import App1350 from "../example/App1350.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1350 />);
  await expect(component).toContainText("Learn React");
});
