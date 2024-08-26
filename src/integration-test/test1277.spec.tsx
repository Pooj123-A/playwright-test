
import { test, expect } from "@playwright/experimental-ct-react";
import App1277 from "../example/App1277.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1277 />);
  await expect(component).toContainText("Learn React");
});
