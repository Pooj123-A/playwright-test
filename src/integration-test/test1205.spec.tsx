
import { test, expect } from "@playwright/experimental-ct-react";
import App1205 from "../example/App1205.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1205 />);
  await expect(component).toContainText("Learn React");
});
