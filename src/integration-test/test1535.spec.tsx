
import { test, expect } from "@playwright/experimental-ct-react";
import App1535 from "../example/App1535.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1535 />);
  await expect(component).toContainText("Learn React");
});
