
import { test, expect } from "@playwright/experimental-ct-react";
import App1156 from "../example/App1156.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1156 />);
  await expect(component).toContainText("Learn React");
});
