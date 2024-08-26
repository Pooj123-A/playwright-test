
import { test, expect } from "@playwright/experimental-ct-react";
import App1388 from "../example/App1388.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1388 />);
  await expect(component).toContainText("Learn React");
});
