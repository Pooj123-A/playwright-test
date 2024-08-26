
import { test, expect } from "@playwright/experimental-ct-react";
import App1207 from "../example/App1207.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1207 />);
  await expect(component).toContainText("Learn React");
});
