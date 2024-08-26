
import { test, expect } from "@playwright/experimental-ct-react";
import App1114 from "../example/App1114.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1114 />);
  await expect(component).toContainText("Learn React");
});
