
import { test, expect } from "@playwright/experimental-ct-react";
import App1269 from "../example/App1269.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1269 />);
  await expect(component).toContainText("Learn React");
});
