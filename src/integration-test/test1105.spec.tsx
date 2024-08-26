
import { test, expect } from "@playwright/experimental-ct-react";
import App1105 from "../example/App1105.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1105 />);
  await expect(component).toContainText("Learn React");
});
