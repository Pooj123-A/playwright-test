
import { test, expect } from "@playwright/experimental-ct-react";
import App1407 from "../example/App1407.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1407 />);
  await expect(component).toContainText("Learn React");
});
