
import { test, expect } from "@playwright/experimental-ct-react";
import App1309 from "../example/App1309.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1309 />);
  await expect(component).toContainText("Learn React");
});
