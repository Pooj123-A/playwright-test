
import { test, expect } from "@playwright/experimental-ct-react";
import App1009 from "../example/App1009.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1009 />);
  await expect(component).toContainText("Learn React");
});
