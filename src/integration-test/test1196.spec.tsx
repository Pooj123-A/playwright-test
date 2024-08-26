
import { test, expect } from "@playwright/experimental-ct-react";
import App1196 from "../example/App1196.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1196 />);
  await expect(component).toContainText("Learn React");
});
