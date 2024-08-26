
import { test, expect } from "@playwright/experimental-ct-react";
import App1303 from "../example/App1303.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1303 />);
  await expect(component).toContainText("Learn React");
});
