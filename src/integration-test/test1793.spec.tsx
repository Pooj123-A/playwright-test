
import { test, expect } from "@playwright/experimental-ct-react";
import App1793 from "../example/App1793.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1793 />);
  await expect(component).toContainText("Learn React");
});
