
import { test, expect } from "@playwright/experimental-ct-react";
import App1238 from "../example/App1238.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1238 />);
  await expect(component).toContainText("Learn React");
});
