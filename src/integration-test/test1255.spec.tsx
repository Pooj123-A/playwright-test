
import { test, expect } from "@playwright/experimental-ct-react";
import App1255 from "../example/App1255.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1255 />);
  await expect(component).toContainText("Learn React");
});
