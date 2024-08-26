
import { test, expect } from "@playwright/experimental-ct-react";
import App1220 from "../example/App1220.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1220 />);
  await expect(component).toContainText("Learn React");
});
