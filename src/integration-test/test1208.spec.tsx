
import { test, expect } from "@playwright/experimental-ct-react";
import App1208 from "../example/App1208.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1208 />);
  await expect(component).toContainText("Learn React");
});
